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
            { slug: "guides/top" },
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
          label: "コンポーネントガイド",
          items: [
            "component-guides/top",
            "component-guides/container",
            "component-guides/title",
            "component-guides/link-button",
          ],
        },
        {
          label: "WordPress",
          items: [
            "wordpress/top",
            {
              label: "固定ページ",
              items: [
                "wordpress/pages/create",
                "wordpress/pages/contents",
                "wordpress/pages/acf",
                "wordpress/pages/static-data",
              ],
            },
          ],
        },
        {
          label: "トラブルシューティング",
          items: ["troubleshooting/top", "troubleshooting/tailwind"],
        },
      ],
    }),
  ],
});
