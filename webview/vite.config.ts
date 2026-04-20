import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

function copyExcalidrawFontsPlugin() {
  return {
    name: "copy-excalidraw-fonts",
    closeBundle() {
      const sourceDir = path.resolve(
        __dirname,
        "node_modules/@excalidraw/excalidraw/dist/prod/fonts"
      );
      const targetDir = path.resolve(__dirname, "dist/fonts");

      if (!fs.existsSync(sourceDir)) {
        return;
      }

      fs.mkdirSync(path.dirname(targetDir), { recursive: true });
      fs.cpSync(sourceDir, targetDir, { recursive: true });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), copyExcalidrawFontsPlugin()],
});
