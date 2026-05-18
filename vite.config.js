import { defineConfig } from 'vite';

// data.cjs is loaded by the browser as a classic <script> (it's the calc layer,
// shared with Node test runs). Vite defaults .cjs to Content-Type
// application/node, which browsers refuse. This plugin overrides it.
const serveCjsAsJs = {
  name: 'serve-cjs-as-js',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.split('?')[0].endsWith('.cjs')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
      next();
    });
  },
};

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/CTAPTracker/' : '/',
  root: './app',
  envDir: '..', // .env lives at /JCPD/, one level above the app root
  cacheDir: './app/.vite', // Inside the app root → served as /.vite/deps/… (no /@fs/ prefix)
  plugins: [serveCjsAsJs],
  server: {
    port: 3737,
    host: true,
    fs: {
      allow: ['..'] // Allow serving files from parent (node_modules at /JCPD/node_modules/)
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
}));
