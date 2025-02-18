import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://jwjang.net',
  integrations: [
    tailwind(),
    alpinejs(),
    mdx()
  ],
  output: 'static'
});
