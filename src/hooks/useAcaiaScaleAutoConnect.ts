import { useScaleConnection } from "../app/providers/ScaleConnectionProvider";

export function useAcaiaScaleAutoConnect() {
  return useScaleConnection();
}
