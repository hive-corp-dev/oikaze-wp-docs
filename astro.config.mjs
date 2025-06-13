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
          label: "スタイルガイド",
          items: [
            { slug: "guides/font-family" },
            { slug: "guides/font-size" },
            { slug: "guides/line-height" },
            { slug: "guides/color" },
            { slug: "guides/sizes" },
            { slug: "guides/max-width" },
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
        {
          label: "コンポーネントガイド",
          autogenerate: { directory: "component-guides" },
        },
      ],
    }),
  ],
});
