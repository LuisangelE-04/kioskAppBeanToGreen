import { createContext, useContext, useState, type ReactNode } from "react";

interface DonationSessionContextType {
  qrToken: string;
  setQrToken: (token: string) => void;
  clearQrToken: () => void;
}

const DonationSessionContext = createContext<DonationSessionContextType | undefined>(undefined);

export function DonationSessionProvider({ children }: { children: ReactNode }) {
  const [qrToken, setQrToken] = useState("");

  const clearQrToken = () => setQrToken("");

  return (
    <DonationSessionContext.Provider
      value={{ qrToken, setQrToken, clearQrToken }}
    >
      {children}
    </DonationSessionContext.Provider>
  );
}

export function useDonationSession(): DonationSessionContextType {
  const context = useContext(DonationSessionContext);
  if (!context) {
    throw new Error("useDonationSession must be used within DonationSessionProvider");
  }
  return context;
}
