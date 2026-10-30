// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://riddle-marketing.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // The booking thank-you page is noindex and only reachable via the
      // cal.com redirect, so it stays out of the sitemap.
      filter: (page) => !page.includes('/blagodarim/'),
    }),
  ],
});
