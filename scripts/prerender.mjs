import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrOutDir = path.join(distDir, 'server');

await build({
  configFile: path.join(root, 'vite.config.js'),
  build: {
    ssr: path.join(root, 'src/entry-server.tsx'),
    outDir: ssrOutDir,
    emptyOutDir: true,
    rollupOptions: {
      output: { format: 'esm', entryFileNames: 'entry-server.js' }
    }
  },
  ssr: { noExternal: ['react-social-icons'] },
  logLevel: 'warn'
});

const entryUrl = pathToFileURL(path.join(ssrOutDir, 'entry-server.js')).href;
const { render } = await import(entryUrl);
const appHtml = render();

const indexPath = path.join(distDir, 'index.html');
const original = fs.readFileSync(indexPath, 'utf-8');
const updated = original.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

if (updated === original) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html');
}

fs.writeFileSync(indexPath, updated);
fs.rmSync(ssrOutDir, { recursive: true, force: true });

console.log('Prerendered HomePage into dist/index.html');
