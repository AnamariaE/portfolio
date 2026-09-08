import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'github-pages-src',
  base: '/portfolio/',
  publicDir: '../github-pages-hold-public',
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [react()],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
});
