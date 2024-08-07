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
  currentPageType?: NavigationEntry["type"],
  currentVersion: string = "v5",
): NavigationData => {
  // filtering data by the current language
  const filteredPagesData = pages.filter((pageData) => {
    const data = pageData.frontmatter;
    // as we have partials inside content structure we don`t need to parse this data for the tree
    const isPage = Object.keys(data).length;
    const url = pageData.url || "";
    const isVersioned = /\/\w*v\d/gi.test(url);
    const isCurrentVersion = isVersioned
      ? url?.includes(`/${currentVersion}/`)
      : true;

    return (
      isPage &&
      pageData.frontmatter.slug.includes(`${currentLang}/`) &&
      isCurrentVersion
    );
  });

  // getting formatted data for the pages
  const pagesData = filteredPagesData.map((page) => {
    const path = page.url?.replace(".mdx", "");
    const updatedPath = path?.includes(`/${currentVersion}/`)
      ? path.replace(`/${currentVersion}/`, "/")
      : path;
    return {
      ...page.frontmatter,
      path: updatedPath,
      url: updatedPath ? getLastPath(updatedPath) : "",
    };
  });

  // data for the pages under current language root
  const { categories, breadcrumbs, childLinks } = getCategoriesUnderLanguage(
    pagesData as NavigationEntry[],
    currentPage,
    currentLang,
    currentPageType,
  );

  // language object with a hierarchy for the categories
  const langItem = categories[currentLang];
  const languageTree = {
    [currentLang]: {
      ...langItem,
      children: getNavigationTree(
        langItem!.children!,
        `${CONTENT_PATH}/${currentLang}`,
      ),
    },
  };

  return { languageTree, breadcrumbs, childLinks };
};
