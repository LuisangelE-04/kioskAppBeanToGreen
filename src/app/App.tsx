import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ScaleConnectionProvider } from "./providers/ScaleConnectionProvider";

export default function App() {
  return (
    <ScaleConnectionProvider>
      <RouterProvider router={router} />
    </ScaleConnectionProvider>
  );
}
