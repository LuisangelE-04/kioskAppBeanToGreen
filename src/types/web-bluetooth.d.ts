interface RequestLEScanOptions {
  filters?: BluetoothLEScanFilter[]
  optionalServices?: BluetoothServiceUUID[]
  acceptAllAdvertisements?: boolean
  keepRepeatedDevices?: boolean
}

interface BluetoothLEScanFilter {
  services?: BluetoothServiceUUID[]
  name?: string
  namePrefix?: string
  manufacturerData?: BluetoothManufacturerDataFilter[]
  serviceData?: BluetoothDataFilter[]
}

interface BluetoothManufacturerDataFilter {
  companyIdentifier: number
  dataPrefix?: BufferSource
  mask?: BufferSource
}

interface BluetoothDataFilter {
  service: BluetoothServiceUUID
  dataPrefix?: BufferSource
  mask?: BufferSource
}

interface BluetoothLEScan {
  active: boolean
  acceptAllAdvertisements: boolean
  keepRepeatedDevices: boolean
  stop(): void
}

interface BluetoothAdvertisingEvent extends Event {
  readonly device: BluetoothDevice
  readonly name?: string | null
  readonly appearance?: number
  readonly txPower?: number
  readonly rssi?: number
  readonly uuids: readonly BluetoothServiceUUID[]
  readonly manufacturerData: ReadonlyMap<number, DataView>
  readonly serviceData: ReadonlyMap<string, DataView>
}

interface Bluetooth extends EventTarget {
  requestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>
  getDevices(): Promise<BluetoothDevice[]>
  requestLEScan(options?: RequestLEScanOptions): Promise<BluetoothLEScan>
  addEventListener(
    type: 'advertisementreceived',
    listener: (event: BluetoothAdvertisingEvent) => void,
    options?: boolean | AddEventListenerOptions,
  ): void
  removeEventListener(
    type: 'advertisementreceived',
    listener: (event: BluetoothAdvertisingEvent) => void,
    options?: boolean | EventListenerOptions,
  ): void
}

interface BluetoothDevice {
  readonly id: string
  readonly name?: string
  readonly gatt?: BluetoothRemoteGATTServer
  addEventListener(
    type: 'gattserverdisconnected',
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void
  removeEventListener(
    type: 'gattserverdisconnected',
    listener: (event: Event) => void,
    options?: boolean | EventListenerOptions,
  ): void
}

interface BluetoothRemoteGATTServer {
  readonly connected: boolean
  connect(): Promise<BluetoothRemoteGATTServer>
  disconnect(): void
  getPrimaryService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>
}

interface BluetoothRemoteGATTService {
  getCharacteristic(characteristic: BluetoothServiceUUID): Promise<BluetoothRemoteGATTCharacteristic>
}

interface BluetoothRemoteGATTCharacteristic extends EventTarget {
  readonly value: DataView | null
  writeValueWithoutResponse(value: ArrayBufferLike | ArrayBufferView): Promise<void>
  startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>
  addEventListener(
    type: 'characteristicvaluechanged',
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void
  removeEventListener(
    type: 'characteristicvaluechanged',
    listener: (event: Event) => void,
    options?: boolean | EventListenerOptions,
  ): void
}

interface Navigator {
  readonly bluetooth: Bluetooth
}

type BluetoothServiceUUID = number | string

interface RequestDeviceOptions {
  filters?: BluetoothLEScanFilter[]
  optionalServices?: BluetoothServiceUUID[]
  acceptAllDevices?: boolean
}
