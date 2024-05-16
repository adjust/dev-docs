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
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: {
        className: ['copy-link']
      },
      content: {
        type: 'element',
        tagName: 'svg',
        properties: {
          xmlns: 'http://www.w3.org/2000/svg',
          height: 20,
          width: 20,
          viewBox: '0 0 16 16',
          fill: 'currentColor'
        },
        children: [{
          type: 'element',
          tagName: 'path',
          properties: {
            fillRule: 'evenodd',
            d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
            clipRule: 'evenodd'
          }
        }]
      }
    }], [rehypeExternalLinks, {
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
