import { useCallback, useEffect, useRef, useState } from "react";
import {
  AcaiaBleService,
  type AcaiaConnectionState,
} from "../services/acaiaBleService";

type UseAcaiaScaleAutoConnectResult = {
  connectionState: AcaiaConnectionState;
  statusMessage: string;
  scanError: string;
  connectedName: string;
  autoReconnectEnabled: boolean;
  weightGrams: number | null;
  isSupported: boolean;
  isAutoReconnectSupported: boolean;
  requiresPairing: boolean;
  pairAndConnect: () => Promise<void>;
  reconnectNow: () => Promise<void>;
  disconnect: () => Promise<void>;
};

export function useAcaiaScaleAutoConnect(): UseAcaiaScaleAutoConnectResult {
  const [connectionState, setConnectionState] = useState<AcaiaConnectionState>("idle");
  const [statusMessage, setStatusMessage] = useState(
    "Pair your scale once, then this app will auto-reconnect.",
  );
  const [scanError, setScanError] = useState("");
  const [connectedName, setConnectedName] = useState("");
  const [autoReconnectEnabled, setAutoReconnectEnabled] = useState(true);
  const [weightGrams, setWeightGrams] = useState<number | null>(null);
  const [requiresPairing, setRequiresPairing] = useState(false);

  const serviceRef = useRef<AcaiaBleService | null>(null);

  const getService = useCallback(() => {
    if (!serviceRef.current) {
      serviceRef.current = new AcaiaBleService({
        onConnectionState: setConnectionState,
        onStatusMessage: setStatusMessage,
        onError: setScanError,
        onWeight: setWeightGrams,
        onConnectedName: setConnectedName,
        onAutoReconnectEnabled: setAutoReconnectEnabled,
      });
    }

    return serviceRef.current;
  }, []);

  const pairAndConnect = useCallback(async () => {
    const service = getService();
    setScanError("");

    try {
      await service.pairAndConnect();
      setRequiresPairing(false);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Device selection cancelled.";
      setConnectionState("error");
      setScanError(message);
    }
  }, [getService]);

  const reconnectNow = useCallback(async () => {
    const service = getService();
    setScanError("");

    const connected = await service.tryAutoReconnect();
    setRequiresPairing(!connected);

    if (!connected && !scanError) {
      setStatusMessage(
        "No granted Acaia device found. Pair once to enable seamless reconnect.",
      );
    }
  }, [getService, scanError]);

  const disconnect = useCallback(async () => {
    const service = getService();
    await service.disconnect();
    setWeightGrams(null);
  }, [getService]);

  useEffect(() => {
    const service = getService();

    const supportMessage = service.getSupportMessage();
    if (supportMessage) {
      setScanError(supportMessage);
      setConnectionState("error");
      return;
    }

    let cancelled = false;

    const kickoff = window.setTimeout(async () => {
      const connected = await service.tryAutoReconnect();
      if (!cancelled) {
        setRequiresPairing(!connected);
        if (!connected) {
          setStatusMessage(
            "No granted Acaia device found. Pair once to enable seamless reconnect.",
          );
        }
      }
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(kickoff);
    };
  }, [getService]);

  useEffect(() => {
    return () => {
      if (serviceRef.current) {
        void serviceRef.current.dispose();
      }
    };
  }, []);

  const service = getService();

  return {
    connectionState,
    statusMessage,
    scanError,
    connectedName,
    autoReconnectEnabled,
    weightGrams,
    isSupported: !service.getSupportMessage(),
    isAutoReconnectSupported: service.isAutoReconnectSupported(),
    requiresPairing,
    pairAndConnect,
    reconnectNow,
    disconnect,
  };
}
