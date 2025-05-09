// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: [
      'react-hook-form',
      'zod',
      '@hookform/resolvers',
      'react-hot-toast'
    ],
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://192.168.1.195:3000/api',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
