import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

import type { Locales } from "@i18n/locales";
import type { TypesenseKeys } from "./types";

export const getSearchParams = () => {
  const searchParams = new URLSearchParams(document.location.search);

  const category = searchParams.get("category") || "all";
  const platform = searchParams.get("platform") || "all";
  const searchQuery = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page")!) || 1;

  return {
    category,
    platform,
    query: searchQuery,
    page,
  };
};

export const setSearchParams = ({
  categoryValue,
  platformValue,
  searchValue,
  pageValue,
  lang,
}: {
  categoryValue?: string;
  platformValue?: string;
  searchValue?: string;
  pageValue?: number;
  lang: string;
}) => {
  const { query, category, platform, page } = getSearchParams();
  const path = `/${lang}/search?query=${searchValue ?? query}&page=${
    pageValue ?? page
  }&category=${categoryValue ?? category}&platform=${
    platformValue ?? platform
  }`;

  window.history.pushState(
    {
      path,
    },
    "",
    path,
  );
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export const getDevHubFilters = (lang: keyof Locales) => {
  const { category, platform } = getSearchParams();

  const categoryFilter = category !== "all" ? `category:${category}` : "";
  const platformFilter = platform !== "all" ? `sdkPlatform:${platform}` : "";

  if (!categoryFilter && !platformFilter) {
    return `lang:${lang}`;
  }

  if (!categoryFilter || !platformFilter) {
    return `lang:${lang} && ${categoryFilter} ${platformFilter}`;
  }

  return `lang:${lang} && ${categoryFilter} && ${platformFilter}`;
};

const getQueryByOrder = (locale?: string) => {
  switch (locale) {
    case "ja":
      return "title_ja,content_ja";
    case "ko":
      return "title_ko,content_ko";
    case "zh":
      return "title_zh,content_zh";
    default:
      return "title,content";
  }
};

export const getTypesenseClient = (
  typesenseKeys: TypesenseKeys,
  locale?: string,
) => {
  const typesenseAdapter = new TypesenseInstantSearchAdapter({
    server: {
      apiKey: typesenseKeys.apiKey, // search-only client key
      nodes: [
        {
          host: typesenseKeys.host, // typesense cloud link
          port: 443,
          protocol: "https",
        },
      ],
    },
    additionalSearchParameters: {
      preset: typesenseKeys.preset,
      query_by: getQueryByOrder(locale),
    },
  });

  return typesenseAdapter.searchClient;
};
