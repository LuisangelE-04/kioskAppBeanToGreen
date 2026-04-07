import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";
import { ProgressIndicator } from "./ProgressIndicator";

export function InstructionsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-8 pt-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[900px] flex flex-col items-center gap-8"
      >
        {/* Logo and Progress */}
        <BeanToGreenLogo />
        
        <ProgressIndicator currentStep={1} />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-6"
        >
          <h1 className="font-['Korto:Bold',sans-serif] text-[42px] text-black text-center">
            Place Your Grounds
          </h1>

          <p className="font-['Korto:Book',sans-serif] text-[24px] text-black text-center max-w-[700px]">
            Place coffee grounds on scale
          </p>

          <div className="bg-[#fff8e6] border-2 border-[#cb7701] rounded-[20px] p-6 mt-4 max-w-[700px]">
            <p className="font-['Korto:Book',sans-serif] text-[18px] text-[#cb7701] text-center">
              Make sure the container is centered on the scale platform
            </p>
          </div>
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => navigate("/weighing")}
          className="h-[55px] w-full max-w-[500px] bg-[#CB7701] hover:bg-[#b56901] text-white rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] transition-colors mt-4"
        >
          I'm Ready
        </motion.button>
      </motion.div>
    </div>
  );
}