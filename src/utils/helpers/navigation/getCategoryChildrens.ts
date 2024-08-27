import { getPathParts } from "./getPathParts";
import { getCurrentPage } from "./getCurrentPage";

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

export const getCategoryChildrens = ({
  categories,
  currentLang,
  currentPage,
  breadcrumbs,
  childLinks,
  currentPageType,
}: GetCategoryChildParams) => {
  const parts = getPathParts(currentPage, currentLang);

  const currentPageFixed = getCurrentPage(currentPage);
  const splittedCurrentPage = currentPageFixed.split("/");

  return categories[currentLang]?.children.map((child) => {
    let isCollapsed = false;

    parts.forEach((part) => {
      // breadcrumbs and collapsed sidebar items logic
      // Need to check paths by the new file namings: https://adjustcom.atlassian.net/browse/THC-900
      if (
        child.path?.endsWith(part + "/index") ||
        child.path?.endsWith(part) ||
        child.path?.endsWith(part + `/index-${currentLang}`) ||
        child.path?.endsWith(part + `-${currentLang}`) ||
        // additional check for the versioning logic
        child.updatedPath?.endsWith(part + "/index") ||
        child.updatedPath?.endsWith(part) ||
        child.updatedPath?.endsWith(part + `/index-${currentLang}`) ||
        child.updatedPath?.endsWith(part + `-${currentLang}`)
      ) {
        isCollapsed = true;
        breadcrumbs.unshift({
          title: child.title,
          url: child.slug,
          level: child.level,
        });
      }

      const splittedChildPage = ("/" + child.slug)?.split("/");

      // category logic if the file has `type: category` then we need to populate children's to display
      if (
        currentPageType === "category" &&
        splittedCurrentPage.length + 1 === splittedChildPage.length &&
        child.slug?.includes(currentPage.slice(1))
      ) {
        childLinks.push({
          title: child.title,
          slug: child.slug,
          description: child.description,
          position: child.position,
        });
      }
    });

    return {
      ...child,
      collapsed: isCollapsed,
    };
  });
};
