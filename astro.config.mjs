// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
      sidebar: [
        {
          label: "ガイド",
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   // { label: "Example Guide", slug: "guides/example" },

          // ],
          autogenerate: { directory: "guides" },
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
