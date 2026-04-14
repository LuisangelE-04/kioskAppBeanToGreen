import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  AcaiaBleService,
  type AcaiaConnectionState,
} from "../../services/acaiaBleService";

type ScaleConnectionContextValue = {
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

const ScaleConnectionContext = createContext<ScaleConnectionContextValue | null>(null);

export function ScaleConnectionProvider({ children }: { children: React.ReactNode }) {
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

  const service = serviceRef.current;

  const pairAndConnect = useCallback(async () => {
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
  }, [service]);

  const reconnectNow = useCallback(async () => {
    setScanError("");

    const connected = await service.tryAutoReconnect();
    setRequiresPairing(!connected);

    if (!connected) {
      setStatusMessage(
        "No granted Acaia device found. Pair once to enable seamless reconnect.",
      );
    }
  }, [service]);

  const disconnect = useCallback(async () => {
    await service.disconnect();
    setWeightGrams(null);
  }, [service]);

  useEffect(() => {
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
  }, [service]);

  useEffect(() => {
    return () => {
      void service.dispose();
    };
  }, [service]);

  const value: ScaleConnectionContextValue = {
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

  return (
    <ScaleConnectionContext.Provider value={value}>
      {children}
    </ScaleConnectionContext.Provider>
  );
}

export function useScaleConnection() {
  const context = useContext(ScaleConnectionContext);

  if (!context) {
    throw new Error("useScaleConnection must be used within ScaleConnectionProvider.");
  }

  return context;
}
