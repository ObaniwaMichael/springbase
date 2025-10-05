import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG", "**/*.jpeg", "**/*.jpg", "**/*.png", "**/*.webp"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 3000,
    host: true
  },
  base: "/",
  define: {
    'process.env': JSON.stringify({
      NODE_ENV: process.env.NODE_ENV || 'development',
      APP_ORIGIN: process.env.APP_ORIGIN || 'http://localhost:3000',
      SMTP_HOST: process.env.SMTP_HOST || 'mail.springbase.com.ng',
      SMTP_PORT: process.env.SMTP_PORT || '465',
      SMTP_USER: process.env.SMTP_USER || 'info@springbase.com.ng',
      SMTP_PASS: process.env.SMTP_PASS || '',
      MAIL_FROM: process.env.MAIL_FROM || 'Springbase Schools <info@springbase.com.ng>',
      SCHOOL_TO_EMAIL: process.env.SCHOOL_TO_EMAIL || 'info@springbase.com.ng'
    })
  }
});
