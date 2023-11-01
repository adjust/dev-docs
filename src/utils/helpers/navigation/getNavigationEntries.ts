import type { MDXInstance } from "astro";

import { CONTENT_PATH } from "src/consts";
import { KNOWN_LANGUAGE_CODES } from "@i18n/locales";
import { getNavigationTree } from "./getNavigationTree";
import { getAllCategoriesUnderLanguages } from "./getAllLanguageCategories";

import type { CategoryEntry, NavigationData, NavigationEntry } from "./types";

const getLastPath = (value: string) => {
  return value?.replace(/\/[\w\d\-\.]*$/, "");
};

export const getNavigationEntries = (
  pages: MDXInstance<Record<string, any>>[],
  currentPage: string,
  currentPageType?: NavigationEntry["type"]
): NavigationData => {
  // getting data for the pages
  const pagesData = pages.map((page) => ({
    ...page.frontmatter,
    path: page.url?.replace(".mdx", ""),
    url: page.url ? getLastPath(page.url) : "",
  }));
  console.log(currentPage, "currentPage");

  const { categories, breadcrumbs, childLinks } =
    getAllCategoriesUnderLanguages(
      pagesData as NavigationEntry[],
      currentPage,
      currentPageType
    );

  const languageTree = KNOWN_LANGUAGE_CODES.reduce((acc, langKey) => {
    const langItem = categories[langKey];

    acc[langKey] = {
      ...langItem,
      children: getNavigationTree(
        langItem!.children!,
        `${CONTENT_PATH}/${langKey}`
      ),
    };
    return acc;
  }, {} as { [key: string]: CategoryEntry });

  return { languageTree, breadcrumbs, childLinks };
};
