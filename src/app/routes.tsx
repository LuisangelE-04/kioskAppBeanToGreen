import { createBrowserRouter } from "react-router";
import { LoginPage } from "./components/LoginPage";
import { InstructionsPage } from "./components/InstructionsPage";
import { ScaleSetupPage } from "./components/ScaleSetupPage";
import { WeighingPageLive } from "./components/WeighingPageLive";
import { CompletionPage } from "./components/CompletionPage";
import { PWAInstallPage } from "./components/PWAInstallPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/instructions",
    Component: InstructionsPage,
  },
  {
    path: "/scale-setup",
    Component: ScaleSetupPage,
  },
  {
    path: "/weighing",
    Component: WeighingPageLive,
  },
  {
    path: "/completion",
    Component: CompletionPage,
  },
  {
    path: "/install",
    Component: PWAInstallPage,
  }
]);
