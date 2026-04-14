import { useState, useCallback, useRef } from "react";
import { AcaiaScale } from "../services/scaleService";

export function useScale() {
  const scaleRef = useRef<AcaiaScale | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [weight, setWeight] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    try {
      setIsConnecting(true);
      setError(null);

      const scale = new AcaiaScale();

      // Set up weight callback to display in console and state
      scale.onWeight((grams: number) => {
        console.log(`Weight: ${grams.toFixed(2)}g`);
        setWeight(grams);
      });

      await scale.connect();
      scaleRef.current = scale;
      setIsConnected(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Connection failed";
      setError(message);
      console.error("Scale connection error:", message);
      setIsConnected(false);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const tare = useCallback(async () => {
    if (!scaleRef.current) {
      setError("Scale not connected");
      return;
    }
    try {
      await scaleRef.current.tare();
      setWeight(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Tare failed";
      setError(message);
    }
  }, []);

  const disconnect = useCallback(async () => {
    if (scaleRef.current) {
      await scaleRef.current.disconnect();
      scaleRef.current = null;
      setIsConnected(false);
      setWeight(null);
    }
  }, []);

  return {
    isConnected,
    isConnecting,
    weight,
    error,
    connect,
    tare,
    disconnect,
  };
}
