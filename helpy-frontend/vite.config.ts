// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react-hook-form',
      'zod',
      '@hookform/resolvers',
      'react-hot-toast'
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.195:3000/api',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
