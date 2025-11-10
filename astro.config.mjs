// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',                         // build estático
  site: 'https://vvelc.github.io',         // GitHub Pages URL
  base: '/portal-web-teoria-de-automatas', // base path para GitHub Pages
  integrations: [],
});
