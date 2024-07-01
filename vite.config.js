import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-router-dom",
        "react-slick",
        "slick-carousel/slick/slick.css",
      ],
    },
  },
});
