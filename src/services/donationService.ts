const DONATION_EVENT_ID_KEY = "donation_event_id";

export async function submitDonation(
  deviceId: string,
  locationId: string,
  weightGrams: number,
  qrToken: string
): Promise<void> {
  const eventId = getOrCreateEventId();
  
  const payload = {
    device_id: deviceId,
    location_id: locationId,
    weight_grams: weightGrams,
    event_id: eventId,
    QRToken: qrToken,
  };

  const url = `${import.meta.env.VITE_API_URL}/kiosk/donation`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Donation submission failed: ${response.statusText}`);
  }
}

function getOrCreateEventId(): string {
  let eventId = sessionStorage.getItem(DONATION_EVENT_ID_KEY);
  if (!eventId) {
    eventId = generateEventId();
    sessionStorage.setItem(DONATION_EVENT_ID_KEY, eventId);
  }
  return eventId;
}

export function clearDonationEventId(): void {
  sessionStorage.removeItem(DONATION_EVENT_ID_KEY);
}

function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
