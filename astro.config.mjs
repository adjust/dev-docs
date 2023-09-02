import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        "@components/Callout.astro",
        "@components/Accordion.astro",
        "@components/ListTable.astro",
        "@components/Icon.astro",
        "@components/Function.astro",
        "@components/Tile.astro",
        "@components/GuiLabel.astro",
        "@components/MenuSelection.astro",
        "@components/Tabs.astro",
        "@components/Tab.astro",
        "@components/Abbr.astro",
        "@components/Badge.astro",
      ],
    }),
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    mdx(),
    tailwind(),
    sitemap(),
  ],
  site: `https://dev-docs-nine.vercel.app/`,
  markdown: {
    remarkPlugins: [remarkDefinitionList],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
  },
});
