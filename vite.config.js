import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    server: env.VITE_PHP_PROXY
      ? {
          proxy: {
            '/api': {
              target: env.VITE_PHP_PROXY,
              changeOrigin: false,
            },
          },
        }
      : undefined,
  };
});
