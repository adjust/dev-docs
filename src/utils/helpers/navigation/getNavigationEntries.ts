import type { MDXInstance } from "astro";

import { CONTENT_PATH } from "src/consts";
import { getNavigationTree } from "./getNavigationTree";
import { getCategoriesUnderLanguage } from "./getCategoriesUnderLanguage";

import type { Locales } from "@i18n/locales";
import type { NavigationData, NavigationEntry } from "./types";

const getLastPath = (value: string) => {
  return value?.replace(/\/[\w\d\-\.]*$/, "");
};

const filterByVersion = (
  currentPage: string,
  currentLang: string,
  versions: NavigationData["versions"],
  filteredPagesByLang: MDXInstance<Record<string, any>>[],
) => {
  const isCurrentPageApi = currentPage.includes(`${currentLang}/api`);
  const defaultApiVersion = versions.api?.find((item) => item.default);
  const defaultSdkVersion = versions.sdk?.find((item) => item.default);

  // need to extract value from the link and assign default version value depending on the current page
  const versionMatch = currentPage?.match(/v\d/gi);
  let currentVersion = versionMatch?.[0];
  if (!versionMatch) {
    if (isCurrentPageApi) {
      currentVersion = defaultApiVersion?.value;
    } else {
      currentVersion = defaultSdkVersion?.value;
    }
  }

  // we need to show default docs in case if we are currently viewing other docs
  // for example if we are opened API docs we should see default version in the SDK section of the sidebar
  const getUsedVersion = (isApiPage?: boolean) => {
    if (isCurrentPageApi && !isApiPage) {
      return defaultSdkVersion?.value;
    }
    if (!isCurrentPageApi && isApiPage) {
      return defaultApiVersion?.value;
    }
    return currentVersion;
  };

  const filteredPagesByVersion = filteredPagesByLang.filter((pageData) => {
    const url = pageData.url || "";
    const isApiPage = url.includes("/api");
    const usedVersion = getUsedVersion(isApiPage);

    // check for the current selected version
    const isVersioned = /\/\w*v\d/gi.test(url);
    const isCurrentVersion = isVersioned
      ? url?.includes(`/${usedVersion}/`)
      : true;

    return isCurrentVersion;
  });

  // getting formatted data for the pages
  const pagesData = filteredPagesByVersion.map((page) => {
    const path = page.url?.replace(".mdx", "");
    const isApiPage = path?.includes("/api");
    const usedVersion = getUsedVersion(isApiPage);
    const updatedPath = path?.includes(`/${usedVersion}/`)
      ? path.replace(`/${usedVersion}/`, "/")
      : path;

    return {
      ...page.frontmatter,
      updatedPath,
      path,
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

  const pagesData = filterByVersion(
    currentPage,
    currentLang,
    versions,
    filteredPagesByLang,
  );

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
      children: getNavigationTree(langItem!.children!, `${CONTENT_PATH}`),
    },
  };

  return { languageTree, breadcrumbs, childLinks, versions };
};
