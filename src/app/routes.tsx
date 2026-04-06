import { createBrowserRouter } from "react-router";
import { LoginPage } from "./components/LoginPage";
import { InstructionsPage } from "./components/InstructionsPage";
import { WeighingPage } from "./components/WeighingPage";
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
    path: "/weighing",
    Component: WeighingPage,
  },
  {
    path: "/completion",
    Component: CompletionPage,
  },
  {
    path: "/install",
    Component: PWAInstallPage,
  },
]);
