import type { MDXInstance } from "astro";

import { CONTENT_PATH, KNOWN_LANGUAGE_CODES } from "src/consts";
import { getNavigationTree } from "./getNavigationTree";
import type { CategoryEntry, NavigationEntry } from "./types";
import { getAllCategoriesUnderLanguages } from "./getAllLanguageCategories";

const getLastPath = (value: string) => {
  return value?.replace(/\/[\w\d\-\.]*$/, "");
};

export const getNavigationEntries = (
  pages: MDXInstance<Record<string, any>>[],
  currentPage: string
) => {
  // getting data for the pages
  const pagesData = pages.map((page) => ({
    ...page.frontmatter,
    path: page.url?.replace(".mdx", ""),
    url: page.url ? getLastPath(page.url) : "",
  }));

  const categories = getAllCategoriesUnderLanguages(
    pagesData as NavigationEntry[],
    currentPage
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

  return languageTree;
};
