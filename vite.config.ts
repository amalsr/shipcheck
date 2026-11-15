import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: { port: 5173, strictPort: true },
  // GitHub Pages serves the app at /shipcheck/, local dev stays at /
  base: command === 'build' ? '/shipcheck/' : '/',
}));
