import { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { motion } from "motion/react";

interface QRScannerProps {
  onScan: (qrData: string) => void;
  onClose: () => void;
}

export function QRScanner({ onScan, onClose }: QRScannerProps) {
  const scannerRef = useRef<HTMLDivElement>(null);
  const scannerInstanceRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (!scannerRef.current) return;

    const scanner = new Html5QrcodeScanner(
      scannerRef.current.id,
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1,
        showTorchButtonIfSupported: true,
      },
      false
    );

    scannerInstanceRef.current = scanner;

    const handleSuccess = (decodedText: string) => {
      console.log("QR Code scanned:", decodedText);
      onScan(decodedText);
      
      // Stop scanner after successful scan
      scanner.clear();
    };

    const handleError = (error: string) => {
      // Suppress "NotFound" errors from continuous scanning
      if (!error.includes("NotFound")) {
        console.warn("QR Scanner error:", error);
      }
    };

    scanner.render(handleSuccess, handleError);

    return () => {
      if (scannerInstanceRef.current) {
        scanner.clear().catch(() => {
          // Scanner already cleared
        });
      }
    };
  }, [onScan]);

  const handleClose = () => {
    if (scannerInstanceRef.current) {
      scannerInstanceRef.current.clear().catch(() => {
        // Scanner already cleared
      });
    }
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-[20px] p-6 max-w-[500px] w-full"
      >
        <h2 className="font-['Korto:Bold',sans-serif] text-[28px] text-black mb-4 text-center">
          Scan QR Code
        </h2>
        
        <div
          id="html5QrcodeScanner"
          ref={scannerRef}
          className="rounded-lg overflow-hidden mb-4"
        />

        <button
          onClick={handleClose}
          className="w-full h-[50px] bg-[#8e8e8e] hover:bg-[#737373] text-white rounded-[15px] font-['Korto:Bold',sans-serif] text-[16px] transition-colors"
        >
          Cancel
        </button>
      </motion.div>
    </motion.div>
  );
}
