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
  level = 2,
) => {
  const hierarchy: CategoryEntry[] = [];

  // filtering objects depends on the level and length of the parent
  // path for the child - 1 should be equal to the parent as we have index files
  const currentLevelItems: CategoryEntry[] = [];
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    const parentCheck =
      (element.path?.startsWith(parentId) &&
        element.path.split("/").length - 1 === parentId.split("/").length) ||
      element.parentId === parentId;

    if (element.level === level && parentCheck) {
      currentLevelItems.push(element);
    }
  }

  // building a hierarchy array for every element on the current level
  // sorting children depends on the position if this value exists in the frontmatter of the MDX file
  for (let index = 0; index < currentLevelItems.length; index++) {
    const element = currentLevelItems[index];
    const children = getNavigationTree(items, element.url, element.level + 1);
    const newItem = { ...element };

    if (children.length > 0) {
      children.sort((a, b) => {
        // if we try to sort pages from the different folders we do nothing
        // if we see that page doesn`t have a position we do nothing

        if (element.level > 3 && a.url !== b.url) {
          return 0;
        }

        if (!a.position && !b.position) {
          return 0;
        }

        a.position = Number(a.position) || 0;
        b.position = Number(b.position) || 0;

        return a?.position > b?.position ? 1 : -1;
      });
      newItem.children = children;
    }

    hierarchy.push(newItem);
  }

  return hierarchy;
};
