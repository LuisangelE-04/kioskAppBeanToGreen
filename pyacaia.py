import asyncio
from bleak import BleakClient

ADDRESS = "36AFA781-43B1-071D-1847-BC44E85D19C4"
WRITE_UUID = "49535343-8841-43F4-A8D4-ECBE34729BB3"
READ_UUID = "49535343-1E4D-4BD9-BA61-23C647249616"

HEADER1 = 0xEF
HEADER2 = 0xDD


def encode(cmd, payload):
    out = bytearray(5 + len(payload))
    out[0] = HEADER1
    out[1] = HEADER2
    out[2] = cmd

    cksum1 = 0
    cksum2 = 0
    for i, value in enumerate(payload):
        value &= 0xFF
        out[3 + i] = value
        if i % 2 == 0:
            cksum1 += value
        else:
            cksum2 += value

    out[len(payload) + 3] = cksum1 & 0xFF
    out[len(payload) + 4] = cksum2 & 0xFF
    return out


def encode_event_data(payload):
    return encode(12, [len(payload) + 1] + payload)


def encode_notification_request():
    # Request weight, battery, timer, key and settings notifications.
    return encode_event_data([0, 1, 1, 2, 2, 5, 3, 4])


def encode_id():
    # Pyxis-style ID packet used by Pearl generations with custom UUIDs.
    payload = [
        0x30,
        0x31,
        0x32,
        0x33,
        0x34,
        0x35,
        0x36,
        0x37,
        0x38,
        0x39,
        0x30,
        0x31,
        0x32,
        0x33,
        0x34,
    ]
    return encode(11, payload)


def encode_heartbeat():
    return encode(0, [2, 0])


def encode_tare():
    return encode(4, [0])


class AcaiaParser:
    def __init__(self):
        self.buffer = bytearray()
        self.units = "grams"

    @staticmethod
    def _decode_weight(weight_payload):
        if len(weight_payload) < 6:
            return None

        value = ((weight_payload[1] & 0xFF) << 8) + (weight_payload[0] & 0xFF)
        unit = weight_payload[4] & 0xFF

        if unit == 1:
            value /= 10.0
        elif unit == 2:
            value /= 100.0
        elif unit == 3:
            value /= 1000.0
        elif unit == 4:
            value /= 10000.0
        else:
            return None

        if (weight_payload[5] & 0x02) == 0x02:
            value *= -1

        return value

    def _to_grams(self, value):
        if value is None:
            return None
        if self.units == "ounces":
            return value * 28.349523125
        return value

    def feed(self, data):
        self.buffer.extend(data)
        grams_values = []

        while True:
            header_index = -1
            for i in range(len(self.buffer) - 1):
                if self.buffer[i] == HEADER1 and self.buffer[i + 1] == HEADER2:
                    header_index = i
                    break

            if header_index < 0:
                self.buffer = self.buffer[-1:]
                break

            if header_index > 0:
                self.buffer = self.buffer[header_index:]

            if len(self.buffer) < 6:
                break

            message_end = self.buffer[3] + 5
            if message_end > len(self.buffer):
                break

            packet = self.buffer[:message_end]
            self.buffer = self.buffer[message_end:]

            cmd = packet[2]
            if cmd == 8:
                settings_payload = packet[3:-2]
                if len(settings_payload) > 2:
                    if settings_payload[2] == 2:
                        self.units = "grams"
                    elif settings_payload[2] == 5:
                        self.units = "ounces"
            elif cmd == 12:
                msg_type = packet[4]
                payload = packet[5:-2]

                if msg_type == 5:
                    grams = self._to_grams(self._decode_weight(payload))
                    if grams is not None:
                        grams_values.append(grams)
                elif msg_type == 11 and len(payload) >= 9 and payload[2] == 5:
                    grams = self._to_grams(self._decode_weight(payload[3:]))
                    if grams is not None:
                        grams_values.append(grams)

        return grams_values


async def main():
    parser = AcaiaParser()
    last_weight = None

    def notification_handler(_sender, data):
        nonlocal last_weight
        for grams in parser.feed(data):
            if last_weight is None or abs(grams - last_weight) >= 0.01:
                print(f"{grams:.2f} g")
                last_weight = grams

    async def input_listener(write_char):
        """Listen for 'Tare' command from stdin in a separate thread."""
        import sys
        loop = asyncio.get_event_loop()
        while True:
            command = await loop.run_in_executor(None, sys.stdin.readline)
            if command.strip().lower() == "tare":
                await write_char(WRITE_UUID, encode_tare(), response=False)
                print("Scale Tared")

    async with BleakClient(ADDRESS) as client:
        print("Connecting to Acaia scale...")
        await asyncio.sleep(1)  # Allow service discovery to complete

        write_char = client.write_gatt_char

        try:
            await client.start_notify(READ_UUID, notification_handler)
        except Exception as e:
            print(f"Error starting notifications: {e}")
            raise

        print("Sending init sequence...")
        await write_char(WRITE_UUID, encode_id(), response=False)
        await asyncio.sleep(0.2)
        await write_char(WRITE_UUID, encode_notification_request(), response=False)
        print("Listening for weight data...")
        print("Type 'tare' and press Enter to reset scale to 0")

        # Start input listener task
        input_task = asyncio.create_task(input_listener(write_char))

        # Heartbeat loop
        try:
            while True:
                await asyncio.sleep(5)
                await write_char(WRITE_UUID, encode_id(), response=False)
                await write_char(WRITE_UUID, encode_heartbeat(), response=False)
        except KeyboardInterrupt:
            input_task.cancel()
            print("\nDisconnecting...")


if __name__ == "__main__":
    asyncio.run(main())