import { getPathParts } from "./getPathParts";

import type { Locales } from "@i18n/locales";
import type { CategoryEntry, NavItemTypes, NavigationData } from "./types";

interface GetCategoryChildParams {
  categories: { [key: string]: CategoryEntry };
  currentLang: keyof Locales;
  currentPage: string;
  breadcrumbs: NavigationData["breadcrumbs"];
  childLinks: NavigationData["childLinks"];
  currentPageType?: NavItemTypes;
}

export const getCategoryChild = ({
  categories,
  currentLang,
  currentPage,
  breadcrumbs,
  childLinks,
  currentPageType,
}: GetCategoryChildParams) => {
  const parts = getPathParts(currentPage);
  // we should remove the last slash for the Production/Preview deployment(something related to the SSR)
  const currentPageFixed = currentPage?.replace(/\/$/g, "");
  const splittedCurrentPage = currentPageFixed.split("/");
  
  return categories[currentLang].children.map((child) => {
    let isCollapsed = false;

    parts.forEach((part) => {
      if (child.path?.endsWith(part + "/index") || child.path?.endsWith(part)) {
        isCollapsed = true;
        breadcrumbs.unshift({
          title: child.title,
          url: child.slug,
          level: child.level,
        });
      }

      const splittedChildPage = child.slug?.split("/");

      if (
        currentPageType === "category" &&
        splittedCurrentPage.length + 1 === splittedChildPage.length &&
        child.slug?.includes(currentPage)
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
  });
};
