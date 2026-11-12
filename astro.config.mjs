import { defineConfig } from 'astro/config';

// If the repo is called <username>.github.io, keep base as '/'.
// If it's any other name (e.g. "website"), set base: '/website'.
export default defineConfig({
  site: 'https://evaharboe.com',
  base: '/',
  // Old /tech and /life links keep working after the rename to Build and Move.
  redirects: {
    '/tech': '/build/',
    '/tech/wrangler-designer': '/build/wrangler-designer/',
    '/tech/video-deblurring': '/build/video-deblurring/',
    '/tech/tams-android': '/build/tams-android/',
    '/tech/bsl-fingerspelling': '/build/bsl-fingerspelling/',
    '/life': '/move/',
    '/life/yoga': '/move/yoga/',
    '/life/retreats': '/move/retreats/',
    '/life/running': '/move/running/',
    '/life/about': '/move/about/',
  },
});
