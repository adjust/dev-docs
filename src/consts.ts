export const SITE = {
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en-us",
} as const;

export const CONTENT_PATH = "src/content/docs";

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
  Japanese: "ja",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME,
  appId: import.meta.env.PUBLIC_ALGOLIA_APP_ID,
  apiKey: import.meta.env.PUBLIC_ALGOLIA_API_KEY,
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "Web SDK": [
      { text: "Get started", link: "en/web/index" },
      {
        text: "Get attribution information",
        link: "en/web/recording/attribution",
      },
      { text: "Configuration reference", link: "en/web/reference/config" },
    ],
    APIs: [{ text: "Report service", link: "api" }],
  },
};
