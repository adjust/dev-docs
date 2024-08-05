import { CONTENT_PATH } from "src/consts";
import { getCategoryChildrens } from "./getCategoryChildrens";

import type { Locales } from "@i18n/locales";
import type { CategoryEntry, NavigationData, NavigationEntry } from "./types";

const getParentId = (url: string, currentLang: string) => {
  const parts = url.split("/");
  if (parts.includes(`index-${currentLang}`) || parts.includes("index")) {
    parts.splice(-2, 2);
    return parts.join("/");
  }
  parts.pop();
  return parts.join("/");
};

const getLevel = (url: string, currentLang: string) => {
  const levelArr = url.replace(`${CONTENT_PATH}/${currentLang}`, "").split("/");
  if (levelArr.includes(`index-${currentLang}`) || levelArr.includes("index")) {
    return levelArr.length - 1;
  }
  return levelArr.length;
};

/**
 * Function returns all categories under all languages.
 **  category - file under src/content/docs/[lang].
 **  each folder in this file structure should have an index file
 *
 * @param data
 * @param currentPage
 * @returns
 */
export const getCategoriesUnderLanguage = (
  data: NavigationEntry[],
  currentPage: string,
  currentLang: keyof Locales,
  currentPageType?: NavigationEntry["type"],
) => {
  const categories: { [key in keyof Partial<Locales>]: CategoryEntry } = {};
  const breadcrumbs: NavigationData["breadcrumbs"] = [];
  const childLinks: NavigationData["childLinks"] = [];

  // when we don`t have data for this locale we return default empty objects/arrays
  if (!data.length) {
    return {
      categories: { [currentLang]: { children: [] as CategoryEntry[] } },
      breadcrumbs: [],
      childLinks: [],
    };
  }

  data.forEach((item) => {
    const {
      title,
      slug,
      "sidebar-label": sidebarLabel,
      "sidebar-position": position,
      "category-title": categoryTitle,
      url,
      path,
      description,
      type,
    } = item;

    const parentId = getParentId(path, currentLang);

    const usedTitle = sidebarLabel || categoryTitle || title;

    // creating language object for the docs root with language key
    if (!categories[currentLang]) {
      categories[currentLang] = {
        description,
        type,
        children: [],
        position,
        title: "Introduction",
        slug: "",
        path: `${CONTENT_PATH}`,
        parentId: null,
        collapsed: true,
        topCategory: true,
        level: 1,
      };
    }

    //if current item has the current language key in the URL we
    // should store this value under current language
    if (url.includes(`${CONTENT_PATH}/${currentLang}`) && usedTitle) {
      categories[currentLang]!.children?.push({
        ...item,
        description,
        type,
        children: [],
        position,
        title: usedTitle,
        slug,
        parentId,
        topCategory: false,
        collapsed: false,
        level: getLevel(path, currentLang),
      });
    }
  });

  categories[currentLang]!.children = getCategoryChildrens({
    categories,
    currentLang,
    currentPage,
    breadcrumbs,
    childLinks,
    currentPageType,
  });

  // need to sort breadcrumbs by level to make sure that the hierarchy is correct
  const sortedBreadcrumbs = breadcrumbs.sort((a, b) =>
    a.level > b.level ? 1 : -1,
  );
  // need to filter breadcrumbs from clones
  const breadcrumbsUnique = sortedBreadcrumbs.filter(
    (breadcrumb, index, arr) =>
      arr.findIndex((element) => element.url === breadcrumb.url) === index,
  );
  // category logic if the file has `type: category` then we need to populate children's to display
  const filteredChilds = childLinks.filter(
    (childLink, index, childLinksArr) =>
      childLinksArr.findIndex((element) => element.slug === childLink.slug) ===
      index,
  );

  return {
    categories,
    breadcrumbs: breadcrumbsUnique,
    childLinks: filteredChilds,
  };
};
