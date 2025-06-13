// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Oikaze WP Docs",
      defaultLocale: "ja",
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      sidebar: [
        {
          label: "ガイド",
          items: [
            { slug: "guides/font-family" },
            { slug: "guides/font-size" },
            { slug: "guides/color" },
            { slug: "guides/breakpoints" },
            { slug: "guides/background-image" },
          ],
        },
        {
          label: "参照",
          autogenerate: { directory: "reference" },
        },
        {
          label: "ヘルプ",
          autogenerate: { directory: "help" },
        },
      ],
    }),
  ],
});
