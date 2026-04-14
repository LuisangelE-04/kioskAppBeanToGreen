import { useScale } from "../../hooks/useScale";

export function TestScalePage() {
  const { isConnected, isConnecting, weight, error, connect, disconnect } = useScale();

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h1>Scale Connection Test</h1>

      <div style={{ marginBottom: "20px" }}>
        <p>
          <strong>Status:</strong>{" "}
          {error ? (
            <span style={{ color: "red" }}>ERROR: {error}</span>
          ) : isConnecting ? (
            <span style={{ color: "orange" }}>Connecting...</span>
          ) : isConnected ? (
            <span style={{ color: "green" }}>CONNECTED</span>
          ) : (
            <span style={{ color: "gray" }}>Disconnected</span>
          )}
        </p>
        <p>
          <strong>Weight:</strong> {weight ? `${weight.toFixed(2)}g` : "No data"}
        </p>
      </div>

      <div>
        {!isConnected ? (
          <button onClick={connect} disabled={isConnecting} style={{ padding: "10px 20px", fontSize: "16px" }}>
            {isConnecting ? "Connecting..." : "Connect to Scale"}
          </button>
        ) : (
          <button onClick={disconnect} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Disconnect
          </button>
        )}
      </div>

      <div style={{ marginTop: "40px", padding: "10px", backgroundColor: "#f0f0f0", minHeight: "200px" }}>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Open browser console (F12) to see detailed weight data stream and connection logs.
        </p>
      </div>
    </div>
  );
}
