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
import rehypeExternalLinks from 'rehype-external-links';

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
    imports: [{
      "@components/index": ["ApiVersion", "Accordion", "Callout", "FigmaEmbed", "MinorVersion", "SdkVersion", "Tab", "Table", "Tabs", "Tile"]
    }],
  }),
  // Enable React for the Algolia search component.
  react({
    experimentalReactChildren: true
  }), expressiveCode(astroExpressiveCodeOptions), mdx(), tailwind(), sitemap(), playformCompress()],
  site: "https://dev.adjust.com/",
  markdown: {
    remarkPlugins: [remarkDefinitionList, [remarkReplaceVersions, versions]],
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: "element",
        tagName: "svg",
        properties: {
          style: "margin-bottom:5px;margin-left:0.25rem;display:inline-block;",
          width: "16px",
          height: "16px",
        },
        children: [{
          type: "element",
          tagName: "use",
          properties: {
            href: "#external-link"
          }
        }]
      }
    }]],
    remarkRehype: {
      handlers: {
        ...defListHastHandlers
      }
    }
  },
});
