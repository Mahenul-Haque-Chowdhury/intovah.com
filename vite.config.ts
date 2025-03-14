import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'

export default defineConfig({
  root: 'src', // Set the root to the 'src' folder
  base: '/', // Base URL for the project
  build: {
    outDir: '../dist', // Output directory for the build
    assetsDir: 'assets', // Directory for static assets
  },
  plugins: [react()], // Enable React support
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Add alias for src folder
    },
  },
});