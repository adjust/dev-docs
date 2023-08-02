import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMermaid from "astro-diagram/remark-mermaid";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";

import {
  astroCodeSnippets,
  codeSnippetAutoImport,
} from "./integrations/astro-code-snippets";
import { asideAutoImport, astroAsides } from "./integrations/astro-asides";
import { astroDropdowns } from "./integrations/astro-dropdowns";
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
      imports: [asideAutoImport, codeSnippetAutoImport],
      imports: [
        asideAutoImport,
        codeSnippetAutoImport,
        tabsAutoImport,
        tabNameAutoImport,
        tabContentAutoImport,
        "@components/Aside.astro",
      ],
    }),
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    astroAsides(),
    astroCodeSnippets(),
    mdx(),
    tailwind(),
    astroTabs(),
    sitemap(),
  ],
  site: `https://dev-docs-nine.vercel.app/`,
  markdown: {
    remarkPlugins: [remarkDefinitionList, remarkMermaid, ...astroDropdowns()],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers,
      },
    },
  },
});
