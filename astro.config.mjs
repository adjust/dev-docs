import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkDefinitionList, defListHastHandlers } from "remark-definition-list";
import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import playformCompress from "@playform/compress";
import remarkReplaceVersions from "./src/integrations/remarkReplaceVersions";
import { fetchVersions } from "./src/integrations/fetchSdkVersions";

const versions = await fetchVersions()

const astroExpressiveCodeOptions = {
  defaultProps: {
    wrap: true
  },
  // This is where you can pass your plugin options
  plugins: [pluginCollapsibleSections()],
  frames: {
    extractFileNameFromCode: false
  },
  styleOverrides: {
    textMarkers: {
      markBackground: "#ddebf9"
    },
    frames: {
      editorTabBarBackground: "#f4f6f9",
      terminalTitlebarBackground: "#f4f6f9",
      terminalBackground: "var(--code-background)"
    }
  },
  themes: ["github-light"]
};


// https://astro.build/config
export default defineConfig({
  integrations: [AutoImport({
    imports: ["@components/Callout.astro", "@components/Accordion.astro", "@components/Table.astro", "@components/Tile.astro", "@components/Tabs.astro", "@components/Tab.astro", "@components/ApiVersion.astro", "@components/SdkVersion.astro", "@components/FigmaEmbed/FigmaEmbed.astro", "@components/MinorVersion.astro"]
  }),
  // Enable React for the Algolia search component.
  react({
    experimentalReactChildren: true
  }), expressiveCode(astroExpressiveCodeOptions), mdx(), tailwind(), sitemap(), playformCompress()],
  site: "https://dev.adjust.com/",
  markdown: {
    remarkPlugins: [remarkDefinitionList, [remarkReplaceVersions, versions]],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers
      }
    }
  },
  experimental: {
    contentCollectionCache: true
  }
});
