import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";
import { ProgressIndicator } from "./ProgressIndicator";
import { useAcaiaScaleAutoConnect } from "../../hooks/useAcaiaScaleAutoConnect";

export function ScaleSetupPage() {
  const navigate = useNavigate();
  const {
    connectionState,
    statusMessage,
    scanError,
    connectedName,
    autoReconnectEnabled,
    requiresPairing,
    isAutoReconnectSupported,
    pairAndConnect,
    reconnectNow,
  } = useAcaiaScaleAutoConnect();

  useEffect(() => {
    if (connectionState === "connected") {
      const next = window.setTimeout(() => {
        navigate("/weighing");
      }, 700);

      return () => {
        window.clearTimeout(next);
      };
    }
  }, [connectionState, navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-8 pt-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-[900px] flex flex-col items-center gap-8"
      >
        <BeanToGreenLogo />

        <ProgressIndicator currentStep={2} />

        <div className="flex flex-col items-center gap-6 mt-6 w-full max-w-[700px]">
          <h1 className="font-['Korto:Bold',sans-serif] text-[32px] text-black text-center">
            Scale Connection
          </h1>

          <p className="font-['Korto:Book',sans-serif] text-[22px] text-black text-center">
            {connectionState === "connected"
              ? "Scale connected. Starting measurement..."
              : "We will reconnect automatically if this scale has been paired before."}
          </p>

          <div className="w-full bg-[#f7f8fc] rounded-[18px] p-5 border border-[#d9e2f5]">
            <p className="font-['Korto:Book',sans-serif] text-[16px] text-black text-center">
              {statusMessage}
            </p>
            {connectedName ? (
              <p className="font-['Korto:Book',sans-serif] text-[14px] text-[#2b3f68] text-center mt-2">
                Connected device: {connectedName}
              </p>
            ) : null}
            <p className="font-['Korto:Book',sans-serif] text-[14px] text-[#2b3f68] text-center mt-1">
              Auto-reconnect: {autoReconnectEnabled ? "enabled" : "disabled"}
            </p>
            {scanError ? (
              <p className="font-['Korto:Book',sans-serif] text-[14px] text-[#b3261e] text-center mt-2">
                {scanError}
              </p>
            ) : null}
          </div>

          {requiresPairing ? (
            <button
              type="button"
              onClick={() => void pairAndConnect()}
              className="h-[55px] w-full max-w-[500px] bg-[#CB7701] hover:bg-[#b56901] text-white rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] transition-colors"
            >
              Set Up Scale (First Time)
            </button>
          ) : (
            <button
              type="button"
              onClick={() => void reconnectNow()}
              className="h-[55px] w-full max-w-[500px] bg-[#CB7701] hover:bg-[#b56901] text-white rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] transition-colors"
            >
              Reconnect Scale
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate("/weighing")}
            className="h-[48px] w-full max-w-[380px] bg-white hover:bg-[#f4f6fb] text-[#1e3a5f] border border-[#c9d6ec] rounded-[24px] font-['Korto:Book',sans-serif] text-[16px] transition-colors"
          >
            Continue to Weighing
          </button>

          {!isAutoReconnectSupported ? (
            <p className="font-['Korto:Book',sans-serif] text-[14px] text-[#2b3f68] text-center max-w-[700px]">
              Your browser does not support navigator.bluetooth.getDevices(), so refresh auto-reconnect may be limited.
            </p>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
