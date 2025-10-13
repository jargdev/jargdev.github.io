// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
      host: true,
      port: 4321,
      hmr: {
        protocol: 'wss',
        host: 'apiv4321.skibidihomer.fun',
        port: 4321
      }
    }
  }
});