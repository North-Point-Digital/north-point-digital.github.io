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
    '/ai-launchpad': '/services/#ai-adoption',
    '/aws-cost-optimisation': '/services/#platform',
    '/build-better': '/services/#platform',
    '/aws-profitability-resilience-blueprint': '/services/#platform',
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
