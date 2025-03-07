// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), sentry(), spotlightjs(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});