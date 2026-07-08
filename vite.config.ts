import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // served from https://lucasle6.github.io/Deymar/ — assets need this prefix
  base: "/Deymar/",
  plugins: [react()],
});
