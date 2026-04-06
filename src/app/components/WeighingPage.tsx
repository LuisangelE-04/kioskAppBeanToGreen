import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";
import { ProgressIndicator } from "./ProgressIndicator";

export function WeighingPage() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState(0);
  const [isStable, setIsStable] = useState(false);

  useEffect(() => {
    let currentWeight = 0;
    const targetWeight = Math.floor(Math.random() * 500) + 200;

    const interval = setInterval(() => {
      currentWeight += Math.floor(Math.random() * 30) + 10;
      if (currentWeight >= targetWeight) {
        currentWeight = targetWeight;
        setIsStable(true);
        clearInterval(interval);

        setTimeout(() => {
          navigate("/completion", { state: { weight: targetWeight } });
        }, 2000);
      }
      setWeight(currentWeight);
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-8 pt-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-[900px] flex flex-col items-center gap-8"
      >
        {/* Logo and Progress */}
        <BeanToGreenLogo />
        
        <ProgressIndicator currentStep={2} />

        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 mt-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-['Korto:Bold',sans-serif] text-[24px] text-black"
          >
            {isStable ? "Weight Confirmed!" : "Measuring..."}
          </motion.h1>

          {/* Weight Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative flex items-center justify-center"
          >
            <svg width="280" height="280" viewBox="0 0 322 322" fill="none">
              <circle cx="161" cy="161" r="161" fill={isStable ? "#60B010" : "#D5E5FF"} />
            </svg>
            <motion.div
              key={weight}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p className={`font-['Korto:Bold',sans-serif] text-center ${isStable ? 'text-white' : 'text-black'}`}>
                <span className="text-[42px]">{weight.toFixed(1)} </span>
                <span className="text-[28px]">grams</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Instruction Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-['Korto:Book',sans-serif] text-[22px] text-black text-center max-w-[700px]"
          >
            Allow Bean to Green a few seconds to measure your contribution.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}