// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dogcityguide.com',

  integrations: [
    mdx(),
    sitemap(),
    netlify()
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});