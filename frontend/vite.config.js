import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [react()],
  build: { outDir: 'dist', emptyOutDir: true, chunkSizeWarningLimit: 700 },
  server: { port: 3000, proxy: { '/api': 'http://localhost:8000' } },
  test: {
    root: fileURLToPath(new URL('..', import.meta.url)),
    environment: 'jsdom',
    globals: true,
    setupFiles: './frontend/src/testSetup.js',
    include: ['tests/frontend/**/*.test.jsx']
  }
});
