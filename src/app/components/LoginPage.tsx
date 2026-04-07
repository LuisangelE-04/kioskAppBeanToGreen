import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";
import { QRScanner } from "./QRScanner";

export function LoginPage() {
  const navigate = useNavigate();
  const [showScanner, setShowScanner] = useState(false);

  const handleScreenTap = () => {
    navigate("/instructions");
  };

  const handleQRScan = (qrData: string) => {
    console.log("User linked via QR code:", qrData);
    // Here you would validate the QR code and link the user account
    // For now, we'll just close the scanner and proceed
    setShowScanner(false);
    navigate("/instructions");
  };

  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] flex items-center justify-center p-12 cursor-pointer"
        onClick={handleScreenTap}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[900px] w-full flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mb-12"
          >
            <BeanToGreenLogo />
          </motion.div>

          {/* Welcome Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-['Korto:Bold',sans-serif] text-[48px] text-black mb-4 text-center"
          >
            Welcome
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-['Korto:Book',sans-serif] text-[24px] text-[#666] mb-16 text-center max-w-[700px]"
          >
            Donate your coffee grounds and help power renewable energy
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 w-full max-w-[500px]"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowScanner(true);
              }}
              className="h-[60px] bg-[#CB7701] hover:bg-[#b56901] text-white rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] transition-colors shadow-md hover:shadow-lg"
            >
              Scan QR Code
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/instructions");
              }}
              className="h-[60px] bg-white border-2 border-[#CB7701] text-[#CB7701] rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] hover:bg-[#fff8e6] transition-colors"
            >
              Skip for Now
            </button>
          </motion.div>

          {/* Or divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 my-8 w-full max-w-[500px]"
          >
            <div className="flex-1 h-px bg-[#ddd]" />
            <span className="text-[#999] font-['Korto:Book',sans-serif]">or</span>
            <div className="flex-1 h-px bg-[#ddd]" />
          </motion.div>

          {/* Tap to continue */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-['Korto:Book',sans-serif] text-[16px] text-[#999] text-center"
          >
            Tap anywhere to continue
          </motion.p>
        </motion.div>
      </div>
      

      {showScanner && (
        <QRScanner
          onScan={handleQRScan}
          onClose={() => setShowScanner(false)}
        />
      )}


    </>
  );
}