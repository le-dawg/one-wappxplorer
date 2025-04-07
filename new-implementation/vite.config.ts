import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 12000,
    host: '0.0.0.0',
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: [
      'work-1-dvzjmefliadhpsbg.prod-runtime.all-hands.dev',
      'work-2-dvzjmefliadhpsbg.prod-runtime.all-hands.dev',
      'localhost'
    ],
  },
});