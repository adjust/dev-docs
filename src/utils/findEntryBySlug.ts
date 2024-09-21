import { languageTree } from "@utils/buildLanguageTree";
import type { LanguageTrees, SidebarItem } from "@utils/types";

/**
 * Generates a map of slug:SidebarItem to facilitate easy searching
 * @param tree
 * @returns A map of all sidebar items accessible by slug.
 */
const createSlugMap = (tree: LanguageTrees): Map<string, SidebarItem> => {
   const slugMap = new Map<string, SidebarItem>();

   // Iterate over each language's entries and add to the map
   Object.values(tree).forEach(languageTree => {
      // Combine both sdk and api entries into one list
      const allEntries = [...languageTree.sdk, ...languageTree.api];

      // Add each entry to the slug map, using the slug as the key
      allEntries.forEach(entry => {
         slugMap.set(entry.slug, entry);
      });
   });

   return slugMap;
};

// Build the slug map for later access
const slugMap = createSlugMap(languageTree);

/**
 *
 * @param slug
 * @returns a SideBarItem with a matching slug value
 */
export const findEntryBySlug = (slug: string): SidebarItem | undefined => {
   return slugMap.get(slug);
};
