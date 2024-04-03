import path from "path";
import { defineConfig } from "vite";
import { qrcode } from "vite-plugin-qrcode";

export default defineConfig({
  root: process.env.VITE_ROOT || "./src/dev",
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "ARLayers",
      fileName: "ar-layers",
      formats: ["es", "umd"],
    },
  },
  plugins: [qrcode()],
});
