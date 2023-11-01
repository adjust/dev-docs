import { KNOWN_LANGUAGE_CODES } from "@i18n/locales";
import { CONTENT_PATH } from "src/consts";

import type { CategoryEntry, NavigationData, NavigationEntry } from "./types";

const getParentId = (url: string) => {
  const parts = url.split("/");
  if (parts.includes("index")) {
    parts.splice(-2, 2);
    return parts.join("/");
  }
  parts.pop();
  return parts.join("/");
};

const getLevel = (url: string, langKey: string) => {
  const levelArr = url.replace(`src/content/docs/${langKey}`, "").split("/");
  if (levelArr.includes("index")) {
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
export const getAllCategoriesUnderLanguages = (
  data: NavigationEntry[],
  currentPage: string,
  currentPageType?: NavigationEntry["type"]
) => {
  const categories: { [key: string]: CategoryEntry } = {};
  const breadcrumbs: NavigationData["breadcrumbs"] = [];
  const childLinks: NavigationData["childLinks"] = [];

  KNOWN_LANGUAGE_CODES.forEach((languageKey) => {
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

      const parentId = getParentId(path);

      const usedTitle = sidebarLabel || categoryTitle || title;

      // creating language object
      if (!categories[languageKey]) {
        categories[languageKey] = {
          description,
          type,
          children: [],
          position,
          title: usedTitle,
          slug: "",
          path,
          parentId: null,
          collapsed: true,
          topCategory: true,
          level: getLevel(path, languageKey),
        };
      }

      //if current item has the current language key in the URL we
      // should store this value under current language
      if (url.includes(`${CONTENT_PATH}/${languageKey}`) && usedTitle) {
        const isTopCategory = path === `${CONTENT_PATH}/${languageKey}/index`;

        categories[languageKey].children?.push({
          ...item,
          description,
          type,
          children: [],
          position,
          title: usedTitle,
          slug,
          parentId,
          topCategory: isTopCategory,
          collapsed: isTopCategory,
          level: getLevel(path, languageKey),
        });
      }
    });

    const pathParts = currentPage.split("/").filter((part) => part !== "");

    const parts = pathParts.reduce((result, _, index) => {
      const fullPath = `/${pathParts.slice(0, index + 1).join("/")}`;

      result.push(fullPath);

      return result;
    }, [] as string[]);

    categories[languageKey].children = categories[languageKey].children.map(
      (child) => {
        let isCollapsed = false;

        parts.forEach((part) => {
          if (
            child.path?.endsWith(part + "/index") ||
            child.path?.endsWith(part)
          ) {
            isCollapsed = true;
            breadcrumbs.unshift({
              title: child.title,
              url: child.slug,
              level: child.level,
            });
          }

          const splittedCurrentPage = currentPage.split("/");
          const splittedChildPage = ("/" + child.slug)?.split("/");

          if (
            currentPageType === "category" &&
            splittedCurrentPage.length + 1 === splittedChildPage.length &&
            child.slug?.includes(currentPage.slice(1))
          ) {
            childLinks.push({
              title: child.title,
              slug: child.slug,
              description: child.description,
            });
          }
        });

        return {
          ...child,
          collapsed: isCollapsed,
        };
      }
    );
  });

  // need to sort breadcrumbs by level to make sure that the hierarchy is correct
  const sortedBreadcrumbs = breadcrumbs.sort((a, b) =>
    a.level > b.level ? 1 : -1
  );
  // need to filter breadcrumbs from clones
  const breadcrumbsUnique = sortedBreadcrumbs.filter(
    (breadcrumb, index, arr) =>
      arr.findIndex((element) => element.url === breadcrumb.url) === index
  );

  const filteredChilds = childLinks.filter(
    (childLink, index, childLinksArr) =>
      childLinksArr.findIndex((element) => element.slug === childLink.slug) ===
      index
  );

  return {
    categories,
    breadcrumbs: breadcrumbsUnique,
    childLinks: filteredChilds,
  };
};
