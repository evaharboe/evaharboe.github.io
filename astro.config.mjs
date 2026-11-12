import { defineConfig } from 'astro/config';

// If the repo is called <username>.github.io, keep base as '/'.
// If it's any other name (e.g. "website"), set base: '/website'.
export default defineConfig({
  site: 'https://evaharboe.github.io',
  base: '/',
});
