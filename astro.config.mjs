import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";
import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";

const astroExpressiveCodeOptions = {
  // This is where you can pass your plugin options
  frames: {
    extractFileNameFromCode: false
  },
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        "@components/Callout.astro",
        "@components/Accordion.astro",
        "@components/Table.astro",
        "@components/Icon.astro",
        "@components/Function.astro",
        "@components/Tile.astro",
        "@components/GuiLabel.astro",
        "@components/MenuSelection.astro",
        "@components/Tabs.astro",
        "@components/Tab.astro",
        "@components/Abbr.astro",
        "@components/Badge.astro",
        "@components/Tooltip.astro",
        "@components/FigmaEmbed/FigmaEmbed.astro",
        "@components/api/Explorer.astro",
      ],
    }),
    // Enable React for the Algolia search component.
    react({ experimentalReactChildren: true }),
    expressiveCode(astroExpressiveCodeOptions,
      {
        plugins: [pluginCollapsibleSections()],
      }),
    mdx(),
    tailwind(),
    sitemap(),
  ],
  site: `https://dev.adjust.com/`,
  experimental: {
    contentCollectionCache: true,
  },
  markdown: {
    remarkPlugins: [remarkDefinitionList],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
  },
});
