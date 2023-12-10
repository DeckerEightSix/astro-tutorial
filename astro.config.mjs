import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://voluble-biscotti-012885.netlify.app/",
  integrations: [preact()]
});