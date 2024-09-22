import { languageTree } from "@utils/helpers/navigation/buildLanguageTree";
import type { LanguageTrees, SidebarItem } from "@utils/helpers/navigation/types";

let slugMap: Map<string, SidebarItem> | undefined;

/**
 * Recursively adds a sidebar item and its children to the slug map.
 * @param map The Map to store slug:SidebarItem pairs.
 * @param item The SidebarItem to add, including its children.
 */
const addToSlugMap = (map: Map<string, SidebarItem>, item: SidebarItem) => {
   map.set(item.slug, item);  // Add the current item to the map

   if (item.children) {
      item.children.forEach(child => {
         addToSlugMap(map, child);  // Recursively add each child
      });
   }
};

/**
 * Generates a map of slug:SidebarItem to facilitate easy searching.
 * This version traverses the entire tree, including nested children.
 * @param tree A language tree containing sidebar items.
 * @returns A Map of all sidebar items accessible by slug.
 */
const createSlugMap = (tree: LanguageTrees): Map<string, SidebarItem> => {
   const map = new Map<string, SidebarItem>();

   Object.values(tree).forEach(languageTree => {
      const allEntries = [...languageTree.sdk, ...languageTree.api];
      allEntries.forEach(entry => {
         addToSlugMap(map, entry);  // Recursively add entries and their children
      });
   });

   return map;
};


const getSlugMap = (): Map<string, SidebarItem> => {
   if (!slugMap) {
      slugMap = createSlugMap(languageTree);
   }
   return slugMap;
};

/**
 * Finds a SidebarItem by slug.
 * @param slug
 * @returns a SidebarItem with a matching slug value or undefined if not found
 */
export const findEntryBySlug = (slug: string): SidebarItem | undefined => {
   return getSlugMap().get(slug);
};
