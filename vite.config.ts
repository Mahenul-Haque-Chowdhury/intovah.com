import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'src', // Set the root to the 'src' folder
  base: '/', // Base URL for the project
  build: {
    outDir: '../dist', // Output directory for the build
    emptyOutDir: true, // Ensure the output directory is emptied before building
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Add alias for src folder
    },
  },
  plugins: [react()],
});