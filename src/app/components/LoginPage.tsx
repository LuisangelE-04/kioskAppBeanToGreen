import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "motion/react";
import { BeanToGreenLogo } from "./BeanToGreenLogo";
import imgQRPhone from "figma:asset/ae18478f6f8e76d1ed58e7f0e397527f51e8e1f3.png";

export function LoginPage() {
  const navigate = useNavigate();
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    const sessionId = Math.random().toString(36).substring(7);
    const baseUrl = window.location.origin;
    const loginUrl = `${baseUrl}/auth/${sessionId}`;
    setQrCodeUrl(loginUrl);

    // Simulate QR code scan and login after 3 seconds
    const timer = setTimeout(() => {
      navigate("/instructions");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-12">
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
          className="mb-8"
        >
          <BeanToGreenLogo />
        </motion.div>

        {/* Log In Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-['Korto:Bold',sans-serif] text-[42px] text-[#555] mb-8"
        >
          Log In
        </motion.h1>

        {/* Phone with QR Code */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mb-6 relative"
        >
          <img
            src={imgQRPhone}
            alt="Phone"
            className="w-[180px] h-auto"
          />
          <div className="absolute top-[32%] left-1/2 -translate-x-1/2 bg-white p-2">
            {qrCodeUrl && (
              <QRCodeSVG
                value={qrCodeUrl}
                size={85}
                level="H"
              />
            )}
          </div>
        </motion.div>

        {/* Instruction Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-['Korto:Book',sans-serif] text-[18px] text-black mb-8"
        >
          Scan QR code to login
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col gap-3 w-full max-w-[450px]"
        >
          <button
            onClick={() => navigate("/instructions")}
            className="h-[55px] bg-[#CB7701] hover:bg-[#b56901] text-white rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] transition-colors"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/")}
            className="h-[55px] bg-white border border-[#8e8e8e] text-[#555] rounded-[30px] font-['Korto:Bold',sans-serif] text-[18px] hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}