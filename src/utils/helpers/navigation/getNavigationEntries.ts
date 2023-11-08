import type { MDXInstance } from "astro";

import { CONTENT_PATH } from "src/consts";
import type { Locales } from "@i18n/locales";
import { getNavigationTree } from "./getNavigationTree";
import { getCategoriesUnderLanguage } from "./getCategoriesUnderLanguage";

import type { NavigationData, NavigationEntry } from "./types";

const getLastPath = (value: string) => {
  return value?.replace(/\/[\w\d\-\.]*$/, "");
};

export const getNavigationEntries = (
  pages: MDXInstance<Record<string, any>>[],
  currentPage: string,
  currentLang: keyof Locales,
  currentPageType?: NavigationEntry["type"]
): NavigationData => {
  // getting data for the pages
  const pagesData = pages.map((page) => ({
    ...page.frontmatter,
    path: page.url?.replace(".mdx", ""),
    url: page.url ? getLastPath(page.url) : "",
  }));

  // data for the pages under current language root
  const { categories, breadcrumbs, childLinks } = getCategoriesUnderLanguage(
    pagesData as NavigationEntry[],
    currentPage,
    currentLang,
    currentPageType
  );
    
  // language object with a hierarchy for the categories
  const langItem = categories[currentLang];
  const languageTree = {
    [currentLang]: {
      ...langItem,
      children: getNavigationTree(
        langItem!.children!,
        `${CONTENT_PATH}/${currentLang}`
      ),
    },
  };

  return { languageTree, breadcrumbs, childLinks };
};
