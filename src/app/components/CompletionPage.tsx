import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";
import { ProgressIndicator } from "./ProgressIndicator";
import { useDonationSession } from "../providers/DonationSessionProvider";
import { submitDonation, clearDonationEventId } from "../../services/donationService";
import svgPaths from "../../imports/svg-qd6x8mo1zp";
import svgPathsNew from "../../imports/svg-rbg3hlwt1j";
import imgImageBeanToGreen from "../../assets/5b28d5f77d7fb3f8fc35de94d42b9f3e93d2436d.png";
import imgImagePolarBears from "../../assets/74334ba36969c307f876a2078f8ac6ab94fe26bc.png";

const DEVICE_ID = "6cf1c5f0-770d-457c-afc8-12dad95782ca";
const LOCATION_ID = "7c299964-e1b2-4384-a5a7-37784ab6f775";

export function CompletionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const weight = location.state?.weight || 450;
  const { qrToken, clearQrToken } = useDonationSession();
  const hasSubmittedRef = useRef(false);

  // Calculate bulbs lit (roughly 1 bulb per 150g)
  const bulbsLit = Math.max(1, Math.floor(weight / 150));

  // Calculate impact metrics
  const impactKwh = (weight / 1000) * 0.03;
  const methaneGrams = weight * 0.2;

  const handleReturnHome = () => {
    navigate("/");
  };

  useEffect(() => {
    let cancelled = false;

    const sendDonation = async () => {
      if (hasSubmittedRef.current) return;
      hasSubmittedRef.current = true;

      try {
        await submitDonation(DEVICE_ID, LOCATION_ID, weight, qrToken || "");
        if (!cancelled) {
          clearQrToken();
          clearDonationEventId();
        }
      } catch (error) {
        console.error("Donation submission failed:", error);
      }
    };

    void sendDonation();

    return () => {
      cancelled = true;
    };
  }, [clearQrToken, qrToken, weight]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 15000);

    return () => clearTimeout(timer);
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
                <p className="font-['Korto:Bold',sans-serif] text-[24px] text-[#cb7701] text-center">{weight.toFixed(1)}</p>
                <p className="font-['Korto:Book',sans-serif] text-[16.8px] text-black text-center">g</p>
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
                <p className="font-['Korto:Bold',sans-serif] text-[24px] text-[#60b010] text-center">{impactKwh.toFixed(2)}</p>
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
                <p className="font-['Korto:Bold',sans-serif] text-[24px] text-[#007aff] text-center">{(methaneGrams / 1000).toFixed(2)}</p>
                <p className="font-['Korto:Book',sans-serif] text-[16.8px] text-black text-center">kg</p>
              </div>
              <p className="font-['Korto:Book',sans-serif] text-[12px] text-black text-center">Methane<br />Prevented</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Return Home Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          onClick={handleReturnHome}
          className="h-[55px] w-full max-w-[500px] bg-[#CB7701] hover:bg-[#b56901] text-white rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] transition-colors mt-4"
        >
          Return Home
        </motion.button>
      </motion.div>
    </div>
  );
}