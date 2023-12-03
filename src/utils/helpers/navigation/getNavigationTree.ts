import type { CategoryEntry } from "./types";

/**
 * A function that returns an array with grouped data by the language key(parentId)
 * @param items
 * @param parentId
 */
export const getNavigationTree = (
  items: CategoryEntry[],
  parentId = "",
  // we start from the second level to skip the index page in the docs path: https://adjustcom.atlassian.net/browse/THC-865
  level = 2
) => {
  const hierarchy: CategoryEntry[] = [];

  const currentLevelItems = items.filter((item) => {
    const parentCheck =
      (item.path?.startsWith(parentId) &&
        item.path.split("/").length - 1 === parentId.split("/").length) ||
      item.parentId === parentId;

    if (item.level === level && parentCheck) {
      return true;
    }
  });

  currentLevelItems.forEach((item) => {
    const children = getNavigationTree(items, item.url, item.level + 1);
    const newItem = { ...item };

    if (children.length > 0) {
      children.sort((a, b) => {
        // if we try to sort pages from the different folders we do nothing
        // if we see that page doesn`t have a position we do nothing
        if (a.url !== b.url || !a?.position || !b?.position) {
          return 0;
        }

        return a?.position > b?.position ? 1 : -1;
      });
      newItem.children = children;
    }

    hierarchy.push(newItem);
  });

  return hierarchy;
};
