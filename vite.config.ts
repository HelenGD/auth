import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      entities: path.resolve(__dirname, './src/entities'),
      app: path.resolve(__dirname, './src/app'),
      features: path.resolve(__dirname, './src/features'),
      shared: path.resolve(__dirname, './src/shared'),
    },
  },
});
