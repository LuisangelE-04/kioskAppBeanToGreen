import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const ACAIA_SERVICE_UUID = '49535343-fe7d-4ae5-8fa9-9fafd205e455'
const ACAIA_WRITE_UUID = '49535343-8841-43f4-a8d4-ecbe34729bb3'
const ACAIA_READ_UUID = '49535343-1e4d-4bd9-ba61-23c647249616'
const DEVICE_ID_KEY = 'acaia.preferredDeviceId'
const HEADER_1 = 0xef
const HEADER_2 = 0xdd
const KNOWN_PREFIXES = ['ACAIA', 'PYXIS', 'LUNAR', 'PROCH', 'PEARL-']

type ConnectionState = 'idle' | 'pairing' | 'connecting' | 'connected' | 'reconnecting' | 'error'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function encode(cmd: number, payload: number[]): Uint8Array {
  const out = new Uint8Array(5 + payload.length)
  out[0] = HEADER_1
  out[1] = HEADER_2
  out[2] = cmd & 0xff

  let checksum1 = 0
  let checksum2 = 0

  payload.forEach((value, index) => {
    const normalized = value & 0xff
    out[3 + index] = normalized
    if (index % 2 === 0) {
      checksum1 += normalized
    } else {
      checksum2 += normalized
    }
  })

  out[payload.length + 3] = checksum1 & 0xff
  out[payload.length + 4] = checksum2 & 0xff

  return out
}

function encodeEventData(payload: number[]): Uint8Array {
  return encode(12, [payload.length + 1, ...payload])
}

function encodeNotificationRequest(): Uint8Array {
  return encodeEventData([0, 1, 1, 2, 2, 5, 3, 4])
}

function encodeId(): Uint8Array {
  return encode(11, [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x30, 0x31, 0x32, 0x33, 0x34])
}

function encodeHeartbeat(): Uint8Array {
  return encode(0, [2, 0])
}

function decodeWeight(payload: number[]): number | null {
  if (payload.length < 6) {
    return null
  }

  let value = ((payload[1] & 0xff) << 8) + (payload[0] & 0xff)
  const unit = payload[4] & 0xff

  if (unit === 1) {
    value /= 10
  } else if (unit === 2) {
    value /= 100
  } else if (unit === 3) {
    value /= 1000
  } else if (unit === 4) {
    value /= 10000
  } else {
    return null
  }

  if ((payload[5] & 0x02) === 0x02) {
    value *= -1
  }

  return value
}

function isKnownAcaiaName(name?: string): boolean {
  if (!name) {
    return false
  }
  return KNOWN_PREFIXES.some((prefix) => name.startsWith(prefix))
}

function App() {
  const [connectionState, setConnectionState] = useState<ConnectionState>('idle')
  const [scanError, setScanError] = useState('')
  const [statusMessage, setStatusMessage] = useState('Pair your scale once, then this app will auto-reconnect.')
  const [weightGrams, setWeightGrams] = useState<number | null>(null)
  const [connectedName, setConnectedName] = useState('')
  const [autoReconnectEnabled, setAutoReconnectEnabled] = useState(true)

  const deviceRef = useRef<BluetoothDevice | null>(null)
  const writeCharRef = useRef<BluetoothRemoteGATTCharacteristic | null>(null)
  const reconnectTimerRef = useRef<number | null>(null)
  const heartbeatTimerRef = useRef<number | null>(null)
  const reconnectAttemptRef = useRef(0)
  const reconnectEnabledRef = useRef(true)
  const packetBufferRef = useRef<number[]>([])
  const unitModeRef = useRef<'grams' | 'ounces'>('grams')
  const connectToDeviceRef = useRef<((device: BluetoothDevice, mode: 'pair' | 'reconnect') => Promise<void>) | null>(null)
  const scheduleReconnectRef = useRef<(reason: string) => void>(() => {})

  const supportMessage = useMemo(() => {
    if (!window.isSecureContext) {
      return 'Web Bluetooth requires a secure context. Use https:// or localhost.'
    }
    if (!('bluetooth' in navigator)) {
      return 'Web Bluetooth is not available in this browser. Use Chrome/Edge over HTTPS.'
    }
    return ''
  }, [])

  const getGrantedDevicesSupported = useMemo(() => {
    return 'bluetooth' in navigator && 'getDevices' in navigator.bluetooth
  }, [])

  const clearConnectionTimers = useCallback(() => {
    if (reconnectTimerRef.current !== null) {
      window.clearTimeout(reconnectTimerRef.current)
      reconnectTimerRef.current = null
    }
    if (heartbeatTimerRef.current !== null) {
      window.clearInterval(heartbeatTimerRef.current)
      heartbeatTimerRef.current = null
    }
  }, [])

  const writePacket = useCallback(async (packet: Uint8Array) => {
    if (!writeCharRef.current) {
      throw new Error('Write characteristic is not available.')
    }

    const payload = new Uint8Array(packet)
    await writeCharRef.current.writeValueWithoutResponse(payload)
  }, [])

  const handleWeightPacket = useCallback((packet: number[]) => {
    const cmd = packet[2]
    if (cmd === 8) {
      const settingsPayload = packet.slice(3, -2)
      if (settingsPayload.length > 2) {
        if (settingsPayload[2] === 2) {
          unitModeRef.current = 'grams'
        } else if (settingsPayload[2] === 5) {
          unitModeRef.current = 'ounces'
        }
      }
      return
    }
    if (cmd !== 12) {
      return
    }

    const messageType = packet[4]
    const payload = packet.slice(5, -2)
    let reading: number | null = null

    if (messageType === 5) {
      reading = decodeWeight(payload)
    } else if (messageType === 11 && payload.length >= 9 && payload[2] === 5) {
      reading = decodeWeight(payload.slice(3))
    }

    if (reading === null) {
      return
    }

    if (unitModeRef.current === 'ounces') {
      reading *= 28.349523125
    }
    setWeightGrams(reading)
  }, [])

  const parseIncomingData = useCallback(
    (bytes: number[]) => {
      const buffer = packetBufferRef.current
      buffer.push(...bytes)

      while (buffer.length > 1) {
        let headerIndex = -1
        for (let i = 0; i < buffer.length - 1; i += 1) {
          if (buffer[i] === HEADER_1 && buffer[i + 1] === HEADER_2) {
            headerIndex = i
            break
          }
        }

        if (headerIndex < 0) {
          packetBufferRef.current = buffer.slice(-1)
          return
        }

        if (headerIndex > 0) {
          buffer.splice(0, headerIndex)
        }

        if (buffer.length < 6) {
          return
        }

        const messageEnd = buffer[3] + 5
        if (messageEnd > buffer.length) {
          return
        }

        const packet = buffer.slice(0, messageEnd)
        buffer.splice(0, messageEnd)
        handleWeightPacket(packet)
      }
    },
    [handleWeightPacket],
  )

  const onCharacteristicValueChanged = useCallback(
    (event: Event) => {
      const characteristic = event.target as BluetoothRemoteGATTCharacteristic
      const value = characteristic.value
      if (!value) {
        return
      }
      const bytes = Array.from(new Uint8Array(value.buffer, value.byteOffset, value.byteLength))
      parseIncomingData(bytes)
    },
    [parseIncomingData],
  )

  const scheduleReconnect = useCallback(
    (reason: string) => {
      if (!reconnectEnabledRef.current || !deviceRef.current) {
        return
      }

      clearConnectionTimers()
      reconnectAttemptRef.current += 1
      const waitMs = Math.min(10000, 1000 * 2 ** (reconnectAttemptRef.current - 1))
      setConnectionState('reconnecting')
      setStatusMessage(`${reason} Retrying in ${Math.round(waitMs / 1000)}s...`)

      reconnectTimerRef.current = window.setTimeout(async () => {
        if (!deviceRef.current) {
          return
        }
        try {
          const reconnect = connectToDeviceRef.current
          if (!reconnect) {
            return
          }

          await reconnect(deviceRef.current, 'reconnect')
        } catch {
          scheduleReconnectRef.current('Reconnect failed.')
        }
      }, waitMs)
    },
    [clearConnectionTimers],
  )

  const onGattDisconnected = useCallback(() => {
    scheduleReconnect('Device disconnected.')
  }, [scheduleReconnect])

  const connectToDevice = useCallback(
    async (device: BluetoothDevice, mode: 'pair' | 'reconnect') => {
      setScanError('')
      reconnectEnabledRef.current = true
      setAutoReconnectEnabled(true)
      clearConnectionTimers()
      setConnectionState('connecting')
      setStatusMessage(mode === 'pair' ? 'Connecting to selected device...' : 'Reconnecting to granted device...')

      if (!device.gatt) {
        throw new Error('This device does not expose a GATT server.')
      }

      device.removeEventListener('gattserverdisconnected', onGattDisconnected)
      device.addEventListener('gattserverdisconnected', onGattDisconnected)
      deviceRef.current = device

      if (!device.gatt.connected) {
        await device.gatt.connect()
      }

      const service = await device.gatt.getPrimaryService(ACAIA_SERVICE_UUID)
      const readChar = await service.getCharacteristic(ACAIA_READ_UUID)
      const writeChar = await service.getCharacteristic(ACAIA_WRITE_UUID)

      readChar.removeEventListener('characteristicvaluechanged', onCharacteristicValueChanged)
      await readChar.startNotifications()
      readChar.addEventListener('characteristicvaluechanged', onCharacteristicValueChanged)

      writeCharRef.current = writeChar
      packetBufferRef.current = []

      await writePacket(encodeId())
      await delay(200)
      await writePacket(encodeNotificationRequest())

      heartbeatTimerRef.current = window.setInterval(async () => {
        try {
          await writePacket(encodeId())
          await writePacket(encodeHeartbeat())
        } catch {
          scheduleReconnect('Heartbeat failed.')
        }
      }, 5000)

      localStorage.setItem(DEVICE_ID_KEY, device.id)
      reconnectAttemptRef.current = 0
      setConnectedName(device.name ?? 'Unnamed Acaia')
      setConnectionState('connected')
      setStatusMessage('Connected and receiving weight notifications.')
    },
    [clearConnectionTimers, onCharacteristicValueChanged, onGattDisconnected, scheduleReconnect, writePacket],
  )
  const pairAndConnect = async () => {
    setScanError('')
    if (supportMessage) {
      setScanError(supportMessage)
      return
    }

    setConnectionState('pairing')
    setStatusMessage('Select your Acaia device in the Bluetooth chooser...')

    try {
      const filters = KNOWN_PREFIXES.map((namePrefix) => ({ namePrefix }))
      const device = await navigator.bluetooth.requestDevice({
        filters,
        optionalServices: [ACAIA_SERVICE_UUID],
      })
      await connectToDevice(device, 'pair')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Device selection cancelled.'
      setConnectionState('error')
      setScanError(message)
    }
  }

  const disconnectNow = () => {
    reconnectEnabledRef.current = false
    setAutoReconnectEnabled(false)
    clearConnectionTimers()
    writeCharRef.current = null
    setWeightGrams(null)

    if (deviceRef.current?.gatt?.connected) {
      deviceRef.current.gatt.disconnect()
    }

    setConnectionState('idle')
    setStatusMessage('Disconnected. Click Pair Device to reconnect.')
  }

  const tryAutoReconnect = useCallback(async () => {
    if (supportMessage || !getGrantedDevicesSupported) {
      return
    }

    try {
      const grantedDevices = await navigator.bluetooth.getDevices()
      if (!grantedDevices.length) {
        return
      }

      const preferredId = localStorage.getItem(DEVICE_ID_KEY)
      const preferred = preferredId ? grantedDevices.find((device) => device.id === preferredId) : null
      const target = preferred ?? grantedDevices.find((device) => isKnownAcaiaName(device.name))

      if (!target) {
        return
      }

      await connectToDevice(target, 'reconnect')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Auto-reconnect failed.'
      setScanError(message)
    }
  }, [connectToDevice, getGrantedDevicesSupported, supportMessage])

  useEffect(() => {
    scheduleReconnectRef.current = scheduleReconnect
  }, [scheduleReconnect])

  useEffect(() => {
    connectToDeviceRef.current = connectToDevice
  }, [connectToDevice])

  useEffect(() => {
    const kickoff = window.setTimeout(() => {
      void tryAutoReconnect()
    }, 0)

    return () => {
      window.clearTimeout(kickoff)
    }
  }, [tryAutoReconnect])

  useEffect(() => {
    return () => {
      reconnectEnabledRef.current = false
      clearConnectionTimers()
      writeCharRef.current = null
      if (deviceRef.current?.gatt?.connected) {
        deviceRef.current.gatt.disconnect()
      }
    }
  }, [clearConnectionTimers])

  return (
    <main className="ble-app">
      <header className="hero">
        <p className="eyebrow">BLE Scale Lab</p>
        <h1>Auto-Reconnect to Your Acaia Scale</h1>
        <p className="subtitle">
          Pair once, then the app automatically reconnects and keeps the GATT session alive.
        </p>
      </header>

      <section className="controls" aria-label="BLE controls">
        <button type="button" className="btn primary" onClick={pairAndConnect}>
          Pair Device
        </button>
        <button type="button" className="btn secondary" onClick={() => void tryAutoReconnect()}>
          Reconnect Now
        </button>
        <button type="button" className="btn ghost" onClick={disconnectNow}>
          Disconnect
        </button>
      </section>

      <p className="hint">
        If this is your first session in Chrome, click Pair Device to grant access. After that, reconnect is automatic.
      </p>

      {scanError ? <p className="notice error">{scanError}</p> : null}
      <p className="notice">{statusMessage}</p>

      <section className="device-list" aria-label="Scale connection state">
        <div className="device-list-header">
          <h2>Connection</h2>
          <span>{connectionState}</span>
        </div>
        <ul>
          <li className="device-item">
            <div>
              <p className="device-name">{connectedName || 'No device connected'}</p>
              <p className="device-meta">
                Live weight: {weightGrams === null ? 'N/A' : `${weightGrams.toFixed(2)} g`}
              </p>
              <p className="device-meta">
                Auto-reconnect: {autoReconnectEnabled ? 'enabled' : 'disabled'}
              </p>
            </div>
          </li>
        </ul>
      </section>

      {!getGrantedDevicesSupported ? (
        <p className="hint">
          This browser does not support navigator.bluetooth.getDevices(), so automatic reconnect after refresh may be limited.
        </p>
      ) : null}
    </main>
  )
}

export default App
