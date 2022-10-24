import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});