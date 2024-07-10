import type { Locales } from "@i18n/locales";

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
