/// <reference types="web-bluetooth" />

const ADDRESS = "36afa781-43b1-071d-1847-bc44e85d19c4";
const WRITE_UUID = "49535343-8841-43f4-a8d4-ecbe34729bb3";
const READ_UUID = "49535343-1e4d-4bd9-ba61-23c647249616";

const HEADER1 = 0xef;
const HEADER2 = 0xdd;

function encode(cmd: number, payload: number[]): Uint8Array {
  const out = new Uint8Array(5 + payload.length);
  out[0] = HEADER1;
  out[1] = HEADER2;
  out[2] = cmd;

  let cksum1 = 0;
  let cksum2 = 0;
  for (let i = 0; i < payload.length; i++) {
    const value = payload[i] & 0xff;
    out[3 + i] = value;
    if (i % 2 === 0) {
      cksum1 += value;
    } else {
      cksum2 += value;
    }
  }

  out[3 + payload.length] = cksum1 & 0xff;
  out[4 + payload.length] = cksum2 & 0xff;
  return out;
}

function encodeEventData(payload: number[]): Uint8Array {
  return encode(12, [payload.length + 1, ...payload]);
}

function encodeNotificationRequest(): Uint8Array {
  return encodeEventData([0, 1, 1, 2, 2, 5, 3, 4]);
}

function encodeId(): Uint8Array {
  const payload = [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x30, 0x31, 0x32, 0x33, 0x34];
  return encode(11, payload);
}

function encodeHeartbeat(): Uint8Array {
  return encode(0, [2, 0]);
}

export function encodeTare(): Uint8Array {
  return encode(4, [0]);
}

class AcaiaParser {
  buffer: Uint8Array = new Uint8Array();
  units: string = "grams";

  private static decodeWeight(weightPayload: Uint8Array): number | null {
    if (weightPayload.length < 6) return null;

    let value = ((weightPayload[1] & 0xff) << 8) + (weightPayload[0] & 0xff);
    const unit = weightPayload[4] & 0xff;

    if (unit === 1) value /= 10.0;
    else if (unit === 2) value /= 100.0;
    else if (unit === 3) value /= 1000.0;
    else if (unit === 4) value /= 10000.0;
    else return null;

    if ((weightPayload[5] & 0x02) === 0x02) value *= -1;
    return value;
  }

  private toGrams(value: number | null): number | null {
    if (value === null) return null;
    if (this.units === "ounces") return value * 28.349523125;
    return value;
  }

  feed(data: Uint8Array): number[] {
    const newBuffer = new Uint8Array(this.buffer.length + data.length);
    newBuffer.set(this.buffer);
    newBuffer.set(data, this.buffer.length);
    this.buffer = newBuffer;

    const grams: number[] = [];

    while (true) {
      let headerIndex = -1;
      for (let i = 0; i < this.buffer.length - 1; i++) {
        if (this.buffer[i] === HEADER1 && this.buffer[i + 1] === HEADER2) {
          headerIndex = i;
          break;
        }
      }

      if (headerIndex < 0) {
        this.buffer = this.buffer.slice(Math.max(0, this.buffer.length - 1));
        break;
      }

      if (headerIndex > 0) {
        this.buffer = this.buffer.slice(headerIndex);
      }

      if (this.buffer.length < 6) break;

      const messageEnd = this.buffer[3] + 5;
      if (messageEnd > this.buffer.length) break;

      const packet = this.buffer.slice(0, messageEnd);
      this.buffer = this.buffer.slice(messageEnd);

      const cmd = packet[2];
      if (cmd === 8) {
        const settingsPayload = packet.slice(3, -2);
        if (settingsPayload.length > 2) {
          if (settingsPayload[2] === 2) this.units = "grams";
          else if (settingsPayload[2] === 5) this.units = "ounces";
        }
      } else if (cmd === 12) {
        const msgType = packet[4];
        const payload = packet.slice(5, -2);

        if (msgType === 5) {
          const result = this.toGrams(AcaiaParser.decodeWeight(payload));
          if (result !== null) grams.push(result);
        } else if (msgType === 11 && payload.length >= 9 && payload[2] === 5) {
          const result = this.toGrams(AcaiaParser.decodeWeight(payload.slice(3)));
          if (result !== null) grams.push(result);
        }
      }
    }

    return grams;
  }
}

export class AcaiaScale {
  private parser = new AcaiaParser();
  private lastWeight: number | null = null;
  private readChar: BluetoothRemoteGATTCharacteristic | null = null;
  private writeChar: BluetoothRemoteGATTCharacteristic | null = null;
  private device: BluetoothDevice | null = null;
  private isConnected = false;
  private onWeightCallback: ((weight: number) => void) | null = null;
  private notificationHandler: ((event: Event) => void) | null = null;

  async connect(): Promise<void> {
    try {
      // Request device with both Read and Write UUIDs as services
      this.device = await navigator.bluetooth.requestDevice({
        filters: [{ services: [READ_UUID, WRITE_UUID] }],
      });

      console.log("✓ Device selected:", this.device.name);

      // Connect to GATT server
      const server = await this.device.gatt!.connect();
      console.log("✓ GATT server connected");

      // Get services and characteristics
      const readService = await server.getPrimaryService(READ_UUID);
      this.readChar = await readService.getCharacteristic(READ_UUID);

      const writeService = await server.getPrimaryService(WRITE_UUID);
      this.writeChar = await writeService.getCharacteristic(WRITE_UUID);

      console.log("✓ Characteristics found");

      this.isConnected = true;

      // Set up notification handler
      this.notificationHandler = (event: Event) => {
        const target = event.target as BluetoothRemoteGATTCharacteristic;
        const dataView = target.value as DataView;
        const data = new Uint8Array(dataView.buffer, dataView.byteOffset, dataView.byteLength);
        
        for (const grams of this.parser.feed(data)) {
          if (this.lastWeight === null || Math.abs(grams - this.lastWeight) >= 0.01) {
            console.log(`${grams.toFixed(2)} g`);
            this.lastWeight = grams;
            
            if (this.onWeightCallback) {
              this.onWeightCallback(grams);
            }
          }
        }
      };

      this.readChar.addEventListener("characteristicvaluechanged", this.notificationHandler);

      // Start notifications
      await this.readChar.startNotifications();
      console.log("✓ Listening for weight data");

      // Send init commands
      await this.writeChar.writeValue(encodeId().buffer as ArrayBuffer);
      await new Promise((r) => setTimeout(r, 200));
      await this.writeChar.writeValue(encodeNotificationRequest().buffer as ArrayBuffer);

      // Heartbeat every 5 seconds
      setInterval(async () => {
        if (this.isConnected && this.writeChar) {
          try {
            await this.writeChar.writeValue(encodeId().buffer as ArrayBuffer);
            await this.writeChar.writeValue(encodeHeartbeat().buffer as ArrayBuffer);
          } catch (e) {
            console.warn("Heartbeat failed:", e);
          }
        }
      }, 5000);

    } catch (error) {
      this.isConnected = false;
      console.error("Scale connection failed:", error);
      throw error;
    }
  }

  async tare(): Promise<void> {
    if (!this.writeChar) throw new Error("Not connected");
    try {
      await this.writeChar.writeValue(encodeTare().buffer as ArrayBuffer);
      console.log("✓ Scale tared");
    } catch (error) {
      console.error("Tare failed:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this.readChar && this.notificationHandler) {
        this.readChar.removeEventListener("characteristicvaluechanged", this.notificationHandler);
        await this.readChar.stopNotifications();
      }
      if (this.device?.gatt) {
        this.device.gatt.disconnect();
      }
      this.isConnected = false;
      this.device = null;
      this.readChar = null;
      this.writeChar = null;
      this.notificationHandler = null;
      console.log("✓ Disconnected from scale");
    } catch (error) {
      console.error("Disconnect error:", error);
    }
  }

  onWeight(callback: (weight: number) => void): void {
    this.onWeightCallback = callback;
  }

  getConnected(): boolean {
    return this.isConnected;
  }
}
