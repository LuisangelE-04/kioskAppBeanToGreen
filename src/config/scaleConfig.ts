/**
 * Scale Configuration
 * Simple settings for Acaia scale connection
 * Set USE_REAL_SCALE to true to connect to actual scale, false for testing
 */

export const SCALE_CONFIG = {
  // Toggle between real scale and simulated data
  USE_REAL_SCALE: false,

  // Acaia Scale Bluetooth UUIDs
  WRITE_UUID: "49535343-8841-43f4-a8d4-ecbe34729bb3",
  READ_UUID: "49535343-1e4d-4bd9-ba61-23c647249616",
  SERVICE_UUID: "49535343-fe7d-4ae5-8fa9-9fafd205e726",

  // Debug logging
  DEBUG_MODE: true,
};
