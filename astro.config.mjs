// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      iconDir: "./src/Icons",
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
  ],
});
