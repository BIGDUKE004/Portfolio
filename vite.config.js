import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  // INLINE=1 npm run build -> embeds the photo (used for the single-file preview)
  build: { assetsInlineLimit: process.env.INLINE ? 400000 : 4096 },
});
