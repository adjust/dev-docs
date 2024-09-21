import { languageTree } from "@utils/helpers/navigation/buildLanguageTree";
import type { LanguageTrees, SidebarItem } from "@utils/helpers/navigation/types";

let slugMap: Map<string, SidebarItem> | undefined;

/**
 * Generates a map of slug:SidebarItem to facilitate easy searching
 * @param tree
 * @returns A map of all sidebar items accessible by slug.
 */
const createSlugMap = (tree: LanguageTrees): Map<string, SidebarItem> => {
   const map = new Map<string, SidebarItem>();

   Object.values(tree).forEach(languageTree => {
      const allEntries = [...languageTree.sdk, ...languageTree.api];
      allEntries.forEach(entry => {
         map.set(entry.slug, entry);
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
