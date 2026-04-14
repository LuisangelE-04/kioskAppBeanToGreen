const ACAIA_SERVICE_UUID = "49535343-fe7d-4ae5-8fa9-9fafd205e455";
const ACAIA_WRITE_UUID = "49535343-8841-43f4-a8d4-ecbe34729bb3";
const ACAIA_READ_UUID = "49535343-1e4d-4bd9-ba61-23c647249616";
const DEVICE_ID_KEY = "acaia.preferredDeviceId";
const HEADER_1 = 0xef;
const HEADER_2 = 0xdd;
const KNOWN_PREFIXES = ["ACAIA", "PYXIS", "LUNAR", "PROCH", "PEARL-"];

export type AcaiaConnectionState =
  | "idle"
  | "pairing"
  | "connecting"
  | "connected"
  | "reconnecting"
  | "error";

type ConnectMode = "pair" | "reconnect";

type ScaleCallbacks = {
  onConnectionState?: (state: AcaiaConnectionState) => void;
  onStatusMessage?: (message: string) => void;
  onError?: (message: string) => void;
  onWeight?: (weightGrams: number) => void;
  onConnectedName?: (name: string) => void;
  onAutoReconnectEnabled?: (enabled: boolean) => void;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function encode(cmd: number, payload: number[]): Uint8Array {
  const out = new Uint8Array(5 + payload.length);
  out[0] = HEADER_1;
  out[1] = HEADER_2;
  out[2] = cmd & 0xff;

  let checksum1 = 0;
  let checksum2 = 0;

  payload.forEach((value, index) => {
    const normalized = value & 0xff;
    out[3 + index] = normalized;
    if (index % 2 === 0) {
      checksum1 += normalized;
    } else {
      checksum2 += normalized;
    }
  });

  out[payload.length + 3] = checksum1 & 0xff;
  out[payload.length + 4] = checksum2 & 0xff;

  return out;
}

function encodeEventData(payload: number[]): Uint8Array {
  return encode(12, [payload.length + 1, ...payload]);
}

function encodeNotificationRequest(): Uint8Array {
  return encodeEventData([0, 1, 1, 2, 2, 5, 3, 4]);
}

function encodeId(): Uint8Array {
  return encode(11, [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x30, 0x31, 0x32, 0x33, 0x34]);
}

function encodeHeartbeat(): Uint8Array {
  return encode(0, [2, 0]);
}

function decodeWeight(payload: number[]): number | null {
  if (payload.length < 6) {
    return null;
  }

  let value = ((payload[1] & 0xff) << 8) + (payload[0] & 0xff);
  const unit = payload[4] & 0xff;

  if (unit === 1) {
    value /= 10;
  } else if (unit === 2) {
    value /= 100;
  } else if (unit === 3) {
    value /= 1000;
  } else if (unit === 4) {
    value /= 10000;
  } else {
    return null;
  }

  if ((payload[5] & 0x02) === 0x02) {
    value *= -1;
  }

  return value;
}

function isKnownAcaiaName(name?: string): boolean {
  if (!name) {
    return false;
  }
  return KNOWN_PREFIXES.some((prefix) => name.startsWith(prefix));
}

export class AcaiaBleService {
  private callbacks: ScaleCallbacks;
  private device: BluetoothDevice | null;
  private writeChar: BluetoothRemoteGATTCharacteristic | null;
  private readChar: BluetoothRemoteGATTCharacteristic | null;
  private reconnectTimer: number | null;
  private heartbeatTimer: number | null;
  private reconnectAttempt: number;
  private reconnectEnabled: boolean;
  private packetBuffer: number[];
  private unitMode: "grams" | "ounces";
  private disposed: boolean;

  constructor(callbacks: ScaleCallbacks = {}) {
    this.callbacks = callbacks;
    this.device = null;
    this.writeChar = null;
    this.readChar = null;
    this.reconnectTimer = null;
    this.heartbeatTimer = null;
    this.reconnectAttempt = 0;
    this.reconnectEnabled = true;
    this.packetBuffer = [];
    this.unitMode = "grams";
    this.disposed = false;
  }

  public setCallbacks(callbacks: ScaleCallbacks): void {
    this.callbacks = callbacks;
  }

  public getSupportMessage(): string {
    if (!window.isSecureContext) {
      return "Web Bluetooth requires a secure context. Use https:// or localhost.";
    }
    if (!("bluetooth" in navigator)) {
      return "Web Bluetooth is not available in this browser. Use Chrome/Edge over HTTPS.";
    }
    return "";
  }

  public isAutoReconnectSupported(): boolean {
    return "bluetooth" in navigator && "getDevices" in navigator.bluetooth;
  }

  public async pairAndConnect(): Promise<void> {
    this.emitError("");

    const supportMessage = this.getSupportMessage();
    if (supportMessage) {
      throw new Error(supportMessage);
    }

    this.emitConnectionState("pairing");
    this.emitStatusMessage("Select your Acaia device in the Bluetooth chooser...");

    const filters = KNOWN_PREFIXES.map((namePrefix) => ({ namePrefix }));
    const device = await navigator.bluetooth.requestDevice({
      filters,
      optionalServices: [ACAIA_SERVICE_UUID],
    });

    await this.connectToDevice(device, "pair");
  }

  public async tryAutoReconnect(): Promise<boolean> {
    if (this.getSupportMessage() || !this.isAutoReconnectSupported()) {
      return false;
    }

    try {
      const grantedDevices = await navigator.bluetooth.getDevices();
      if (!grantedDevices.length) {
        return false;
      }

      const preferredId = localStorage.getItem(DEVICE_ID_KEY);
      const preferred = preferredId
        ? grantedDevices.find((device) => device.id === preferredId)
        : null;
      const target =
        preferred ??
        grantedDevices.find((device) => isKnownAcaiaName(device.name));

      if (!target) {
        return false;
      }

      await this.connectToDevice(target, "reconnect");
      return true;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Auto-reconnect failed.";
      this.emitError(message);
      return false;
    }
  }

  public async disconnect(): Promise<void> {
    this.reconnectEnabled = false;
    this.emitAutoReconnectEnabled(false);
    this.clearConnectionTimers();

    if (this.readChar) {
      this.readChar.removeEventListener(
        "characteristicvaluechanged",
        this.onCharacteristicValueChanged,
      );
    }

    this.writeChar = null;
    this.readChar = null;
    this.packetBuffer = [];

    if (this.device) {
      this.device.removeEventListener(
        "gattserverdisconnected",
        this.onGattDisconnected,
      );

      if (this.device.gatt?.connected) {
        this.device.gatt.disconnect();
      }
    }

    this.emitConnectionState("idle");
    this.emitStatusMessage("Disconnected. Pair again or wait for auto-reconnect.");
  }

  public async dispose(): Promise<void> {
    this.disposed = true;
    await this.disconnect();
  }

  private emitConnectionState(state: AcaiaConnectionState): void {
    this.callbacks.onConnectionState?.(state);
  }

  private emitStatusMessage(message: string): void {
    this.callbacks.onStatusMessage?.(message);
  }

  private emitError(message: string): void {
    this.callbacks.onError?.(message);
  }

  private emitWeight(weightGrams: number): void {
    this.callbacks.onWeight?.(weightGrams);
  }

  private emitConnectedName(name: string): void {
    this.callbacks.onConnectedName?.(name);
  }

  private emitAutoReconnectEnabled(enabled: boolean): void {
    this.callbacks.onAutoReconnectEnabled?.(enabled);
  }

  private clearConnectionTimers(): void {
    if (this.reconnectTimer !== null) {
      window.clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    if (this.heartbeatTimer !== null) {
      window.clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private async writePacket(packet: Uint8Array): Promise<void> {
    if (!this.writeChar) {
      throw new Error("Write characteristic is not available.");
    }

    const payload = new Uint8Array(packet);
    await this.writeChar.writeValueWithoutResponse(payload);
  }

  private handleWeightPacket(packet: number[]): void {
    const cmd = packet[2];
    if (cmd === 8) {
      const settingsPayload = packet.slice(3, -2);
      if (settingsPayload.length > 2) {
        if (settingsPayload[2] === 2) {
          this.unitMode = "grams";
        } else if (settingsPayload[2] === 5) {
          this.unitMode = "ounces";
        }
      }
      return;
    }

    if (cmd !== 12) {
      return;
    }

    const messageType = packet[4];
    const payload = packet.slice(5, -2);
    let reading: number | null = null;

    if (messageType === 5) {
      reading = decodeWeight(payload);
    } else if (messageType === 11 && payload.length >= 9 && payload[2] === 5) {
      reading = decodeWeight(payload.slice(3));
    }

    if (reading === null) {
      return;
    }

    if (this.unitMode === "ounces") {
      reading *= 28.349523125;
    }

    this.emitWeight(reading);
  }

  private parseIncomingData(bytes: number[]): void {
    const buffer = this.packetBuffer;
    buffer.push(...bytes);

    while (buffer.length > 1) {
      let headerIndex = -1;

      for (let i = 0; i < buffer.length - 1; i += 1) {
        if (buffer[i] === HEADER_1 && buffer[i + 1] === HEADER_2) {
          headerIndex = i;
          break;
        }
      }

      if (headerIndex < 0) {
        this.packetBuffer = buffer.slice(-1);
        return;
      }

      if (headerIndex > 0) {
        buffer.splice(0, headerIndex);
      }

      if (buffer.length < 6) {
        return;
      }

      const messageEnd = buffer[3] + 5;
      if (messageEnd > buffer.length) {
        return;
      }

      const packet = buffer.slice(0, messageEnd);
      buffer.splice(0, messageEnd);
      this.handleWeightPacket(packet);
    }
  }

  private onCharacteristicValueChanged = (event: Event): void => {
    const characteristic = event.target as BluetoothRemoteGATTCharacteristic;
    const value = characteristic.value;

    if (!value) {
      return;
    }

    const bytes = Array.from(
      new Uint8Array(value.buffer, value.byteOffset, value.byteLength),
    );
    this.parseIncomingData(bytes);
  };

  private onGattDisconnected = (): void => {
    this.scheduleReconnect("Device disconnected.");
  };

  private scheduleReconnect(reason: string): void {
    if (this.disposed || !this.reconnectEnabled || !this.device) {
      return;
    }

    this.clearConnectionTimers();
    this.reconnectAttempt += 1;

    const waitMs = Math.min(10000, 1000 * 2 ** (this.reconnectAttempt - 1));
    this.emitConnectionState("reconnecting");
    this.emitStatusMessage(
      `${reason} Retrying in ${Math.round(waitMs / 1000)}s...`,
    );

    this.reconnectTimer = window.setTimeout(async () => {
      if (!this.device || this.disposed) {
        return;
      }

      try {
        await this.connectToDevice(this.device, "reconnect");
      } catch {
        this.scheduleReconnect("Reconnect failed.");
      }
    }, waitMs);
  }

  private async connectToDevice(
    device: BluetoothDevice,
    mode: ConnectMode,
  ): Promise<void> {
    this.emitError("");
    this.reconnectEnabled = true;
    this.emitAutoReconnectEnabled(true);
    this.clearConnectionTimers();
    this.emitConnectionState("connecting");
    this.emitStatusMessage(
      mode === "pair"
        ? "Connecting to selected device..."
        : "Reconnecting to granted device...",
    );

    if (!device.gatt) {
      throw new Error("This device does not expose a GATT server.");
    }

    device.removeEventListener("gattserverdisconnected", this.onGattDisconnected);
    device.addEventListener("gattserverdisconnected", this.onGattDisconnected);
    this.device = device;

    if (!device.gatt.connected) {
      await device.gatt.connect();
    }

    const service = await device.gatt.getPrimaryService(ACAIA_SERVICE_UUID);
    const readChar = await service.getCharacteristic(ACAIA_READ_UUID);
    const writeChar = await service.getCharacteristic(ACAIA_WRITE_UUID);

    readChar.removeEventListener(
      "characteristicvaluechanged",
      this.onCharacteristicValueChanged,
    );

    await readChar.startNotifications();
    readChar.addEventListener(
      "characteristicvaluechanged",
      this.onCharacteristicValueChanged,
    );

    this.readChar = readChar;
    this.writeChar = writeChar;
    this.packetBuffer = [];

    await this.writePacket(encodeId());
    await delay(200);
    await this.writePacket(encodeNotificationRequest());

    this.heartbeatTimer = window.setInterval(async () => {
      try {
        await this.writePacket(encodeId());
        await this.writePacket(encodeHeartbeat());
      } catch {
        this.scheduleReconnect("Heartbeat failed.");
      }
    }, 5000);

    localStorage.setItem(DEVICE_ID_KEY, device.id);
    this.reconnectAttempt = 0;

    this.emitConnectedName(device.name ?? "Unnamed Acaia");
    this.emitConnectionState("connected");
    this.emitStatusMessage("Connected and receiving weight notifications.");
  }
}
