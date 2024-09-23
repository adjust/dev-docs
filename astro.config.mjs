import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import remarkReplaceVersions from "./src/integrations/remarkReplaceVersions";
import { fetchVersions } from "./src/integrations/fetchSdkVersions";
import rehypeExternalLinks from "rehype-external-links";
import remarkCustomHeadingId from "remark-custom-heading-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import redirectList from "./src/redirects.json";
import {
  remarkDefinitionList,
  defListHastHandlers,
} from "remark-definition-list";
import { writeFile } from "fs";
import markdoc from "@astrojs/markdoc";

console.log(
  `${import.meta.env.VITE_GITHUB_TOKEN ? "Token found" : "No token found"}`,
);

const versions = await fetchVersions();
const versionJSON = JSON.stringify(versions, null, 2)
await writeFile("src/versionMap.json", versionJSON, (err) => { });

const locales = ["en", "ja", "ko", "zh"];

const prependLocaleToJSON = (input, locales) => {
  const result = {};

  for (const [key, value] of Object.entries(input)) {
    locales.forEach((locale) => {
      result[`/${locale}${key}`] = `/${locale}${value}`;
    });
  }

  return result;
};

const updatedRedirectList = prependLocaleToJSON(redirectList, locales);

// https://astro.build/config
export default defineConfig({
  redirects: updatedRedirectList,
  integrations: [AutoImport({
    imports: [
      "@components/Accordion.astro",
      "@components/Callout.astro",
      "@components/CodeBlock.astro",
      "@components/ListColumns.astro",
      "@components/MinorVersion.astro",
      "@components/SdkVersion.astro",
      "@components/Tab.astro",
      "@components/Tabs.astro",
    ],
  }), // Enable React for the Algolia search component.
  react({
    experimentalReactChildren: true,
  }), expressiveCode(), mdx({
    optimize: true,
  }), tailwind(), sitemap(), markdoc()],
  site: "https://dev.adjust.com/",
  markdown: {
    remarkPlugins: [
      [remarkReplaceVersions, versions],
      remarkCustomHeadingId,
      remarkDefinitionList,
    ],
    remarkRehype: {
      handlers: defListHastHandlers,
    },
    rehypePlugins: [
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["copy-link"],
          },
          content: {
            type: "element",
            tagName: "svg",
            properties: {
              xmlns: "http://www.w3.org/2000/svg",
              height: 24,
              width: 24,
              viewBox: "0 0 24 24",
              fill: "currentColor",
            },
            children: [
              {
                type: "element",
                tagName: "path",
                properties: {
                  fillRule: "evenodd",
                  d: "M8.464 10.793a.5.5 0 00-.707 0l-1.68 1.68c-1.19 1.19-1.298 3.12-.17 4.248l.943.942c1.155 1.155 3.031.905 4.19-.254l1.667-1.667a.5.5 0 10-.707-.707l-1.666 1.667c-.879.878-2.114.917-2.777.254l-.943-.942c-.681-.682-.687-1.977.17-2.834l1.68-1.68a.5.5 0 000-.707zm2.829-2.829a.5.5 0 010-.707l1.68-1.68c1.19-1.19 3.12-1.298 4.248-.17l.942.942c1.155 1.155.905 3.032-.254 4.191l-1.666 1.667a.5.5 0 01-.707-.707l1.666-1.667c.878-.878.918-2.113.254-2.777l-.942-.942c-.682-.682-1.976-.688-2.833.17L12 7.964a.5.5 0 01-.707 0zm3.535 1.414a.5.5 0 10-.707-.707l-4.95 4.95a.5.5 0 10.708.707l4.95-4.95z",
                  clipRule: "evenodd",
                },
              },
            ],
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          content: {
            type: "element",
            tagName: "svg",
            properties: {
              style:
                "margin-bottom:0.35rem;margin-left:0.15rem;margin-right:0.15rem;display:inline-block;",
              width: "16",
              height: "16",
            },
            children: [
              {
                type: "element",
                tagName: "use",
                properties: {
                  href: "#external-link",
                },
              },
            ],
          },
        },
      ],
    ],
  },
});
