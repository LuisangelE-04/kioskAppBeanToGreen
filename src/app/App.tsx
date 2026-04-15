import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ScaleConnectionProvider } from "./providers/ScaleConnectionProvider";
import { DonationSessionProvider } from "./providers/DonationSessionProvider";

export default function App() {
  return (
    <DonationSessionProvider>
      <ScaleConnectionProvider>
        <RouterProvider router={router} />
      </ScaleConnectionProvider>
    </DonationSessionProvider>
  );
}
