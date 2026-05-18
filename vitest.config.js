import { defineConfig } from 'vitest/config';

// Vite's `root` is set to ./app for serving the PWA in dev/build.
// Vitest reuses that unless overridden, so point it back at the repo root
// where ./tests/ lives.
export default defineConfig({
  root: '.',
  test: {
    include: ['tests/**/*.test.js'],
  },
});
