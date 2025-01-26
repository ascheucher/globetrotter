// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ascheucher.github.io',
  base: 'globetrotter',
  integrations: [
    react(),
    tailwind()
  ],
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  vite: {
    server: {
      host: true,
      allowedHosts: [
        'mini-01.hill.eremite.cc',
        'docker-host-01'
      ]
    }
  }
});
