// Import necessary types
import type { ContentCollectionEntry, LanguageTree, SidebarItem } from "@utils/helpers/navigation/types";

const versionRegex = /v\d/i;
/**
 * Builds a JSON object that represents the content collection as a sidebar.
 * @param entries An array of ContentCollectionEntry items
 * @returns A LanguageTree containing SidebarItem entries for API and SDK content.
 * @returns A hashmap of all entries provided for easier querying.
 */
export const buildSidebarHierarchy = (entries: ContentCollectionEntry[]): [LanguageTree, Map<string, SidebarItem>] => {
   // Initialize arrays for SDK and API content
   const hierarchy = {
      sdk: [] as SidebarItem[],
      api: [] as SidebarItem[],
   };

   // Sort entries by slug length (shortest first)
   const sortedEntries = entries.sort((a, b) => a.slug.length - b.slug.length);

   // Create a map for quick lookup by slug
   const slugMap = new Map<string, SidebarItem>();

   // Populate the slugMap with SidebarItems
   sortedEntries.forEach(entry => {
      const { id, slug, data } = entry;
      const { title, description, "sidebar-label": label, "sidebar-position": position, "category-title": categoryTitle, type, redirects } = data;
      slugMap.set(entry.slug, {
         id,
         title,
         description,
         slug,
         label,
         position,
         categoryTitle,
         children: [],
         type,
         version: "",
         level: 0,
         redirects
      });
   });

   /**
    * Extracts the version number from a content collection entry ID.
    * @param id The path (id) of the collection entry
    * @returns A version string or null
    */
   const extractVersionFromSlug = (id: string): string | undefined => {
      const idParts = id.split('/');
      // If content is versioned, it will always be at the 3rd position
      const versionIndex = 3;
      const matchedVersion = versionRegex.exec(idParts[versionIndex]);
      return matchedVersion ? matchedVersion[0] : undefined;
   };

   /**
    * Recursively sets the level for children.
    * @param parent The parent entry
    * @param level The level of the parent (children will have parent level + 1)
    */
   const setChildLevels = (parent: SidebarItem, level: number) => {
      parent.children?.forEach(child => {
         // Set the child to one level under the parent
         child.level = level + 1;
         setChildLevels(child, child.level);
      });
   };

   // Build the parent-child relationships
   sortedEntries.forEach(entry => {
      // Fetch the entry from the slug map
      const structuredEntry = slugMap.get(entry.slug)!;
      const slugParts = entry.slug.split('/');
      // Check the slug to see if the entry is an api or sdk entry
      const type = slugParts[1];

      // Extract version from the entry id
      structuredEntry.version = extractVersionFromSlug(structuredEntry.id) || undefined;

      // Find potential children by checking if the slug is a direct parent
      slugMap.forEach((potentialChild, potentialChildSlug) => {
         if (!potentialChildSlug.startsWith(entry.slug + "/") || potentialChild.parent) {
            // Skip if child doesn't start with the parent slug or already has a parent
            return;
         }

         const parentSlugParts = entry.slug.split('/');
         const parentIdParts = entry.id.split('/');
         const childSlugParts = potentialChild.slug.split('/');

         // Special case: Handle index pages in versioned folders
         let isSpecialCase = false;
         if (
            childSlugParts.length === 4 &&
            versionRegex.test(childSlugParts[3]) &&
            parentIdParts.length === 2 &&
            childSlugParts.slice(0, 2).join("/") === parentSlugParts.join("/")
         ) {
            isSpecialCase = true;
         }

         // Normal case: the child is one level deeper than the parent
         const isDirectChild = childSlugParts.length === parentSlugParts.length + 1;

         // Assign child only if it's a direct child or matches the special case
         if ((isSpecialCase || isDirectChild) && potentialChildSlug.startsWith(entry.slug + '/') && potentialChildSlug !== entry.slug) {
            // Only set the parent if it doesn't already have one to avoid double nesting
            if (!potentialChild.parent) {
               potentialChild.parent = entry.slug;

               // Insert the child in the correct position or alphabetically
               if (potentialChild.position) {
                  structuredEntry.children?.splice(potentialChild.position - 1, 0, potentialChild);
               } else {
                  structuredEntry.children?.push(potentialChild);
               }

               // Remove the entry from the root hierarchy since it's now a child
               if (type === "sdk") {
                  hierarchy.sdk = hierarchy.sdk.filter(item => item.slug !== potentialChild.slug);
               } else if (type === "api") {
                  hierarchy.api = hierarchy.api.filter(item => item.slug !== potentialChild.slug);
               }
            }
         }
      });

      // Sort the children alphabetically if they have no position
      structuredEntry.children?.sort((a, b) => {
         if (a.position && b.position) {
            return 0;
         }
         if (a.position) {
            return -1;
         }
         if (b.position) {
            return 1;
         }
         // Sort alphabetically by file name (last part of the id)
         const aFileName = a.id.split('/').pop()?.toLowerCase();
         const bFileName = b.id.split('/').pop()?.toLowerCase();
         return aFileName?.localeCompare(bFileName!);
      });

      // If the entry has no parent, add it to the top level
      if (!structuredEntry.parent) {
         if (type === "sdk") {
            hierarchy.sdk.push(structuredEntry);
         } else if (type === "api") {
            hierarchy.api.push(structuredEntry);
         }
      }

      // Set levels for children
      setChildLevels(structuredEntry, structuredEntry.level);
   });

   return [hierarchy, slugMap]; // Return sdk and api arrays inside the hierarchy object
};
