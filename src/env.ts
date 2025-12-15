import dotenv from "dotenv";

let loaded = false;

export function loadEnv(): void {
  if (loaded) return; // Prevent re-loading
  dotenv.config();
  loaded = true;
}
