import type { MDXInstance } from "astro";

import { CONTENT_PATH } from "src/consts";
import { getNavigationTree } from "./getNavigationTree";
import { getCategoriesUnderLanguage } from "./getCategoriesUnderLanguage";

import type { Locales } from "@i18n/locales";
import type { NavigationData, NavigationEntry } from "./types";

const getLastPath = (value: string) => {
  return value?.replace(/\/[\w\d\-\.]*$/, "");
};

const formatByVersion = (
  filteredPagesByLang: MDXInstance<Record<string, any>>[],
) => {
  // getting formatted data for the pages
  const pagesData = filteredPagesByLang.map((page) => {
    const path = page.url?.replace(".mdx", "");
    const versionMatch = path?.match(/v\d/gi);
    const version = versionMatch ? versionMatch[0] : null;
    const updatedPath = path?.includes(`/${version}/`)
      ? path.replace(`/${version}/`, "/")
      : path;

    return {
      ...page.frontmatter,
      updatedPath,
      path,
      version,
      url: updatedPath ? getLastPath(updatedPath) : "",
    };
  });

  return pagesData;
};

export const getNavigationEntries = (
  pages: MDXInstance<Record<string, any>>[],
  currentPage: string,
  currentLang: keyof Locales,
  currentPageType?: NavigationEntry["type"],
): NavigationData => {
  // filtering data by the current language
  const filteredPagesByLang = pages.filter((pageData) => {
    const data = pageData.frontmatter;
    // as we have partials inside content structure we don`t need to parse this data for the tree
    const isPage = Object.keys(data).length;

    return isPage && pageData.frontmatter.slug.includes(`${currentLang}/`);
  });

  const versions: NavigationData["versions"] = {
    api: [],
    sdk: [],
  };

  // extract versions from the page data
  for (const pageData of filteredPagesByLang) {
    const url = pageData.url || "";
    // populating versions data from the frontmatter
    const versionsData = pageData.frontmatter.versions;
    const isApi = url?.includes("/api/");
    if (versionsData?.length) {
      if (isApi) {
        versions.api!.push(...versionsData);
      } else {
        versions.sdk!.push(...versionsData);
      }
    }
  }

  const formattedPagesData = formatByVersion(filteredPagesByLang);

  // data for the pages under current language root
  const { categories, breadcrumbs, childLinks } = getCategoriesUnderLanguage(
    formattedPagesData as NavigationEntry[],
    currentPage,
    currentLang,
    currentPageType,
  );

  // language object with a hierarchy for the categories
  const langItem = categories[currentLang];
  const languageTree = {
    [currentLang]: {
      ...langItem,
      children: getNavigationTree(langItem!.children!, `${CONTENT_PATH}`),
    },
  };

  return { languageTree, breadcrumbs, childLinks, versions };
};
