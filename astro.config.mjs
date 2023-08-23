import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMermaid from "remark-mermaidjs";
import rehypeMermaid from "rehype-mermaidjs";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";

import {
  tabsAutoImport,
  tabNameAutoImport,
  tabContentAutoImport,
  astroTabs,
} from "./integrations/astro-tabs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        tabsAutoImport,
        tabNameAutoImport,
        tabContentAutoImport,
        "@components/Callout.astro",
        "@components/Accordion.astro",
        "@components/ListTable.astro",
        "@components/Icon.astro",
        "@components/Function.astro",
        "@components/Tile.astro",
        "@components/GuiLabel.astro",
        "@components/MenuSelection.astro",
      ],
    }),
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    mdx(),
    tailwind(),
    astroTabs(),
    sitemap(),
  ],
  site: `https://dev-docs-nine.vercel.app/`,
  markdown: {
    remarkPlugins: [remarkDefinitionList, remarkMermaid],
    rehypePlugins: [rehypeMermaid],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
  },
});
