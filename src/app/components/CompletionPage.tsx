import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";
import { ProgressIndicator } from "./ProgressIndicator";
import svgPaths from "../../imports/svg-qd6x8mo1zp";
import svgPathsNew from "../../imports/svg-rbg3hlwt1j";
import imgImageBeanToGreen from "figma:asset/5b28d5f77d7fb3f8fc35de94d42b9f3e93d2436d.png";
import imgImagePolarBears from "figma:asset/74334ba36969c307f876a2078f8ac6ab94fe26bc.png";

export function CompletionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const weight = location.state?.weight || 450;
  const [showImpact, setShowImpact] = useState(false);

  // Calculate bulbs lit (roughly 1 bulb per 150g)
  const bulbsLit = Math.max(1, Math.floor(weight / 150));

  useEffect(() => {
    // Show impact screen after 5 seconds
    const timer = setTimeout(() => {
      setShowImpact(true);
    }, 5000);

    // Auto-advance to install page
    const advanceTimer = setTimeout(() => {
      navigate("/install");
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearTimeout(advanceTimer);
    };
  }, [navigate]);

  if (showImpact) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-start p-8 pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-[900px] flex flex-col items-center gap-8"
        >
          {/* Logo and Progress */}
          <BeanToGreenLogo />
          
          <ProgressIndicator currentStep={4} />

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-8 mt-4"
          >
            <h1 className="font-['Korto:Bold',sans-serif] text-[24px] text-black text-center">
              You helped light up
            </h1>

            {/* Lightbulbs */}
            <div className="flex gap-[35px] items-center justify-center">
              {Array.from({ length: Math.min(bulbsLit, 3) }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.5 + i * 0.2, 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15 
                  }}
                  className="w-[75px] h-[105px]"
                >
                  <svg className="w-full h-full" viewBox="0 0 96 133" fill="none">
                    <path
                      d={svgPaths.p32d2dd00}
                      fill="white"
                      stroke="#60B010"
                      strokeWidth="3"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Impact Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="font-['Korto:Book',sans-serif] text-[24px] text-black text-center max-w-[700px]"
            >
              {bulbsLit === 1 ? 'one' : bulbsLit === 2 ? 'two' : 'three'} 10-watt light bulb{bulbsLit > 1 ? 's' : ''} for one hour!
            </motion.p>

            {/* Stat Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex gap-[10px] items-center justify-center w-full mt-4"
            >
              {/* Grounds Donated Card */}
              <div className="bg-[rgba(255,255,255,0.8)] flex flex-col gap-[8px] h-[210px] items-center justify-center pt-[10px] px-[16px] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(208,223,246,0.4)] w-[150px]">
                {/* Icon Circle */}
                <div className="relative size-[86px]">
                  <svg className="absolute size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 86">
                    <circle cx="43" cy="43" r="43" fill="#D0DFF6" />
                  </svg>
                  <div className="absolute inset-[29.6%_36.32%_26.11%_36.48%]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24.0783 39.0876">
                      <path d={svgPathsNew.p32a3ef00} fill="white" stroke="#CB7701" strokeLinecap="round" />
                      <path d={svgPathsNew.p122c8400} fill="white" stroke="#CB7701" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute left-[21.69%] right-[23.6%] top-[50%] -translate-y-1/2">
                    <img alt="" className="w-full h-auto" src={imgImageBeanToGreen} />
                  </div>
                </div>
                {/* Stats */}
                <div className="flex flex-col gap-[10px] items-center">
                  <p className="font-['Korto:Bold',sans-serif] text-[24px] text-[#cb7701] text-center">{(weight / 1000).toFixed(1)}</p>
                  <p className="font-['Korto:Book',sans-serif] text-[16.8px] text-black text-center">kg</p>
                </div>
                <p className="font-['Korto:Book',sans-serif] text-[12px] text-black text-center">Grounds<br />Donated</p>
              </div>

              {/* Energy Generated Card */}
              <div className="bg-[rgba(255,255,255,0.8)] flex flex-col gap-[8px] h-[210px] items-center justify-center pt-[10px] px-[16px] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(208,223,246,0.4)] w-[150px]">
                {/* Icon Circle */}
                <div className="relative size-[86px]">
                  <svg className="absolute size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 86">
                    <circle cx="43" cy="43" r="43" fill="#D0DFF6" />
                  </svg>
                  <div className="absolute inset-[33.48%_36.23%_28.95%_36.78%]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 22.9557 30.9844">
                      <path d={svgPathsNew.p10a47600} fill="white" stroke="#60B010" strokeWidth="0.888833" />
                    </svg>
                  </div>
                </div>
                {/* Stats */}
                <div className="flex flex-col gap-[10px] items-center">
                  <p className="font-['Korto:Bold',sans-serif] text-[24px] text-[#60b010] text-center">{((weight / 1000) * 0.12 * 1000).toFixed(0)}</p>
                  <p className="font-['Korto:Book',sans-serif] text-[16.8px] text-black text-center">kWh</p>
                </div>
                <p className="font-['Korto:Book',sans-serif] text-[12px] text-black text-center">Generated</p>
              </div>

              {/* Methane Prevented Card */}
              <div className="bg-[rgba(255,255,255,0.8)] flex flex-col gap-[8px] h-[210px] items-center justify-center pt-[10px] px-[16px] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(208,223,246,0.4)] w-[150px]">
                {/* Icon Circle */}
                <div className="relative size-[86px]">
                  <svg className="absolute size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 86">
                    <circle cx="43" cy="43" r="43" fill="#D0DFF6" />
                  </svg>
                  <img alt="" className="absolute left-[17px] top-[17px] size-[52px]" src={imgImagePolarBears} />
                </div>
                {/* Stats */}
                <div className="flex flex-col gap-[10px] items-center">
                  <p className="font-['Korto:Bold',sans-serif] text-[24px] text-[#007aff] text-center">{((weight / 1000) * 0.5 * 1000).toFixed(0)}</p>
                  <p className="font-['Korto:Book',sans-serif] text-[16.8px] text-black text-center">kg</p>
                </div>
                <p className="font-['Korto:Book',sans-serif] text-[12px] text-black text-center">Methane<br />Prevented</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Proceed Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            onClick={() => navigate("/install")}
            className="h-[55px] w-full max-w-[500px] border border-[#8e8e8e] text-[#555] rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] hover:bg-gray-50 transition-colors mt-4"
          >
            Continue
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-8 pt-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[900px] flex flex-col items-center gap-8"
      >
        {/* Logo and Progress */}
        <BeanToGreenLogo />
        
        <ProgressIndicator currentStep={3} />

        <div className="flex flex-col items-center gap-8 mt-6">
          <h1 className="font-['Korto:Bold',sans-serif] text-[42px] text-black text-center">
            You have donated {(weight / 453.592).toFixed(1)} pounds of grounds today!
          </h1>

          <p className="font-['Korto:Book',sans-serif] text-[24px] text-black text-center max-w-[700px]">
            Please remove from scale and place on the flap above.
          </p>

          <div className="bg-[#fff8e6] border-2 border-[#cb7701] rounded-[20px] p-6 w-full max-w-[700px]">
            <p className="font-['Korto:Book',sans-serif] text-[20px] text-[#cb7701] text-center">
              Push the grounds all the way down into the collection bin
            </p>
          </div>

          <button
            onClick={() => setShowImpact(true)}
            className="h-[55px] w-full max-w-[500px] bg-[#CB7701] hover:bg-[#b56901] text-white rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] transition-colors"
          >
            Done - Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}