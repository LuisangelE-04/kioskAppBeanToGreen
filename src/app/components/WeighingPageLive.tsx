import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";
import { ProgressIndicator } from "./ProgressIndicator";
import { useAcaiaScaleAutoConnect } from "../../hooks/useAcaiaScaleAutoConnect";

const STABILITY_DELTA_GRAMS = 1.5;
const STABILITY_HOLD_MS = 1500;
const MIN_VALID_WEIGHT_GRAMS = 20;
const COMPLETE_DELAY_MS = 2000;

export function WeighingPageLive() {
  const navigate = useNavigate();
  const {
    connectionState,
    statusMessage,
    weightGrams,
  } = useAcaiaScaleAutoConnect();

  const [isStable, setIsStable] = useState(false);

  const stableSinceRef = useRef<number | null>(null);
  const lastWeightRef = useRef<number | null>(null);
  const completedRef = useRef(false);
  const completionTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (completionTimerRef.current !== null) {
        window.clearTimeout(completionTimerRef.current);
        completionTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (typeof weightGrams !== "number" || !Number.isFinite(weightGrams)) {
      setIsStable(false);
      stableSinceRef.current = null;
      lastWeightRef.current = null;
      return;
    }

    if (weightGrams < MIN_VALID_WEIGHT_GRAMS) {
      setIsStable(false);
      stableSinceRef.current = null;
      lastWeightRef.current = weightGrams;
      return;
    }

    if (completedRef.current) {
      return;
    }

    const previous = lastWeightRef.current;
    const now = Date.now();

    if (previous === null) {
      stableSinceRef.current = now;
      lastWeightRef.current = weightGrams;
      return;
    }

    const delta = Math.abs(weightGrams - previous);

    if (delta <= STABILITY_DELTA_GRAMS) {
      if (stableSinceRef.current === null) {
        stableSinceRef.current = now;
      }

      const stableForMs = now - stableSinceRef.current;
      if (stableForMs >= STABILITY_HOLD_MS && !isStable) {
        setIsStable(true);

        completionTimerRef.current = window.setTimeout(() => {
          completedRef.current = true;
          navigate("/completion", {
            state: { weight: Number(weightGrams.toFixed(1)) },
          });
        }, COMPLETE_DELAY_MS);
      }
    } else {
      setIsStable(false);
      stableSinceRef.current = now;
    }

    lastWeightRef.current = weightGrams;
  }, [isStable, navigate, weightGrams]);

  const hasWeight = typeof weightGrams === "number" && Number.isFinite(weightGrams);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-8 pt-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-[900px] flex flex-col items-center gap-8"
      >
        <BeanToGreenLogo />

        <ProgressIndicator currentStep={2} />

        <div className="flex flex-col items-center gap-8 mt-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-['Korto:Bold',sans-serif] text-[24px] text-black"
          >
            {isStable
              ? "Weight Confirmed!"
              : connectionState === "connected"
                ? "Measuring..."
                : "Preparing Scale..."}
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative flex items-center justify-center"
          >
            <svg width="280" height="280" viewBox="0 0 322 322" fill="none">
              <circle
                cx="161"
                cy="161"
                r="161"
                fill={isStable ? "#60B010" : "#D5E5FF"}
              />
            </svg>
            <motion.div
              key={hasWeight ? weightGrams?.toFixed(1) : "no-data"}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p
                className={`font-['Korto:Bold',sans-serif] text-center ${
                  isStable ? "text-white" : "text-black"
                }`}
              >
                <span className="text-[42px]">
                  {hasWeight ? weightGrams?.toFixed(1) : "--.-"}{" "}
                </span>
                <span className="text-[28px]">grams</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-['Korto:Book',sans-serif] text-[22px] text-black text-center max-w-[700px]"
          >
            {connectionState === "connected"
              ? "Place coffee grounds on the scale and hold steady for confirmation."
              : "Waiting for scale connection to complete..."}
          </motion.p>

          <div className="w-full max-w-[700px] bg-[#f7f8fc] rounded-[18px] p-4 border border-[#d9e2f5]">
            <p className="font-['Korto:Book',sans-serif] text-[16px] text-black text-center">
              {statusMessage}
            </p>
          </div>

          {connectionState !== "connected" ? (
            <button
              type="button"
              onClick={() => navigate("/scale-setup")}
              className="h-[48px] min-w-[250px] bg-white hover:bg-[#f4f6fb] text-[#1e3a5f] border border-[#c9d6ec] rounded-[24px] font-['Korto:Book',sans-serif] text-[16px] transition-colors"
            >
              Open Scale Setup
            </button>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}
