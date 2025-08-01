import { resolve } from "node:url";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
});
