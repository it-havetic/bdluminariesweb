import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "BD Luminaries",
        short_name: "BDL",
        description: "A React app with PWA support using Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/bdl.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/bdl.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
