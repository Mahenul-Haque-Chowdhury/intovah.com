import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // root: 'src', // Set the root to the 'src' folder
  base: '/', // Base URL for the project
  build: {
    outDir: 'dist', // Ensures everything is compiled into dist/
    emptyOutDir: true,
    manifest: true, // Generates a manifest.json file
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Add alias for src folder
    },
  },
  plugins: [react()],
});