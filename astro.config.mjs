import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://northpointdigital.com',
  output: 'static',
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
  redirects: {
    '/aws-profitability-resilience-blueprint': '/aws-cost-optimisation',
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
    mdx(),
  ],
});
