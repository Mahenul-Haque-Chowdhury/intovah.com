import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // root: 'src', // Set the root to the 'src' folder
  base: '/', // Base URL for the project
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true, // Generates a JSON file with correct asset paths
    rollupOptions: {
      input: 'index.html', // Ensures correct entry point
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Add alias for src folder
    },
  },
  plugins: [react()],
});