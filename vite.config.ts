import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      ext: ".br",
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion", "gsap"],
          i18n: ["i18next", "react-i18next"],
          tailwind: ["tailwindcss"],
          icons: ["lucide-react"],
        },
        assetFileNames: "assets/[hash][extname]",
        chunkFileNames: "js/[hash].js",
        entryFileNames: "js/[hash].js",
      },
    },
    modulePreload: {
      polyfill: true,
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    emptyOutDir: true,
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "gsap",
      "i18next",
      "react-i18next",
    ],
    exclude: ["fsevents"],
  },
  server: {
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 3000,
    host: true,
  },
});
