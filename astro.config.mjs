import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["images.unsplash.com"],
  },
  integrations: [
    icon({
      iconDir: "./src/assets/icons",
      include: {
        mdi: [
          "email",
          "location",
          "linkedin",
          "github",
          "xml",
          "pencil-ruler",
          "application-outline",
          "human-male-board",
          "react",
          "head-dots-horizontal-outline",
        ],
      },
    }),
    sitemap(),
  ],
  site: "https://corbynaltman.com",
});
