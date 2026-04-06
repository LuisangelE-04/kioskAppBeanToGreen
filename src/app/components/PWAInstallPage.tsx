import { useEffect } from "react";
import { useNavigate } from "react-router";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";

export function PWAInstallPage() {
  const navigate = useNavigate();
  const appUrl = window.location.origin;

  useEffect(() => {
    // Return to login after 15 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 15000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[75%] w-[800px] h-[800px] opacity-40">
        <svg className="w-full h-full" viewBox="0 0 960 960" fill="none">
          <circle cx="480" cy="480" r="480" fill="#D5E5FF" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[900px] w-full flex flex-col items-center relative z-10"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="font-['Korto:Bold',sans-serif] text-[42px] text-black mb-8 text-center"
        >
          See You Soon!
        </motion.h1>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-10"
        >
          <BeanToGreenLogo />
        </motion.div>

        {/* Install Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6 mb-8"
        >
          <div className="text-center">
            <p className="font-['Korto:Book',sans-serif] text-[24px] text-[#555] mb-1">
              Install Bean to Green
            </p>
            <p className="font-['Korto:Book',sans-serif] text-[24px] text-[#555]">
              to stay updated and track rewards!
            </p>
          </div>

          {/* How to Install Instructions */}
          <div className="bg-[rgba(255,255,255,0.8)] rounded-[20px] p-6 w-full max-w-[700px] shadow-[0px_0px_8px_0px_rgba(208,223,246,0.4)]">
            <p className="font-['Korto:Bold',sans-serif] text-[18px] text-black mb-3 text-center">
              How to Add to Home Screen
            </p>
            <div className="text-left space-y-2">
              <p className="font-['Korto:Book',sans-serif] text-[16px] text-[#555]">
                <span className="text-[#60b010] font-bold">1.</span> Scan the QR code below with your phone
              </p>
              <p className="font-['Korto:Book',sans-serif] text-[16px] text-[#555]">
                <span className="text-[#60b010] font-bold">2.</span> Open the link in Safari (iOS) or Chrome (Android)
              </p>
              <p className="font-['Korto:Book',sans-serif] text-[16px] text-[#555]">
                <span className="text-[#60b010] font-bold">3.</span> Tap the Share button <span className="inline-block">📤</span> (iOS) or Menu <span className="inline-block">⋮</span> (Android)
              </p>
              <p className="font-['Korto:Book',sans-serif] text-[16px] text-[#555]">
                <span className="text-[#60b010] font-bold">4.</span> Select "Add to Home Screen"
              </p>
              <p className="font-['Korto:Book',sans-serif] text-[16px] text-[#555]">
                <span className="text-[#60b010] font-bold">5.</span> Tap "Add" to confirm
              </p>
            </div>
          </div>
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="bg-white p-5 rounded-[20px] border-4 border-[#60b010] shadow-lg"
        >
          <QRCodeSVG
            value={appUrl}
            size={180}
            level="H"
            includeMargin={true}
          />
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="font-['Korto:Book',sans-serif] text-[18px]">
            <span className="text-[#cb7701]">The bears thank you,</span>
            {" "}
            <span className="text-[#60b010]">your neighbor will too.</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}