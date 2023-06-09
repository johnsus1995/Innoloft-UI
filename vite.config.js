import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      src: "/src",
      assets:"/assets",
    },
    build: {
      assetsDir: "assets",
      assetsInclude: ["jpg", "png", "gif", "svg"],
    },
  },
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
});
