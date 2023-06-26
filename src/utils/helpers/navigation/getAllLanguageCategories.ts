import { CONTENT_PATH, KNOWN_LANGUAGE_CODES } from "src/consts";
import type { CategoryEntry, NavigationEntry } from "./types";

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
  currentPage: string
) => {
  const obj: { [key: string]: CategoryEntry } = {};

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
      } = item;
      const parentId = getParentId(path);

      const usedTitle = sidebarLabel || categoryTitle || title;

      // creating language object
      if (!obj[languageKey]) {
        obj[languageKey] = {
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

        obj[languageKey].children?.push({
          ...item,
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

    obj[languageKey].children = obj[languageKey].children.map((child) => {
      let isCollapsed = false;

      parts.forEach((part) => {
        if (child.path?.endsWith(part + "/index")) {
          isCollapsed = true;
        }
      });

      return {
        ...child,
        collapsed: isCollapsed,
      };
    });
  });

  return obj;
};
