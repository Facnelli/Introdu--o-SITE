import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  build: {
    rollupOptions: {
      external: [
        "react-router-dom",
        "react-slick",
        "slick-carousel/slick/slick.css",
        "slick-carousel/slick/slick-theme.css",
      ],
    },
  },
});
