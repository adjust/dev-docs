/**
 * Takes in an array of content and forms it into language trees that resemble the final
 * form of the sidebar to make it easier to build sidebar logic.
 */

import type { ContentCollectionEntry, LanguageTree, SidebarItem } from "@utils/types";

const versionRegex = /v\d/i;

/**
 *
 * @param entries
 * @returns A LanguageTree containing SidebarItem entries for API and SDK content.
 */
export const buildSidebarHierarchy = (entries: ContentCollectionEntry[]): LanguageTree => {
   // Initialize arrays for sdk and api
   const hierarchy = {
      sdk: [] as SidebarItem[],
      api: [] as SidebarItem[],
   };

   // Sort the array by slug length, shortest first
   const sortedEntries = entries.sort((a, b) => a.slug.length - b.slug.length);

   // Create a map for quick lookup by slug
   const slugMap = new Map<string, SidebarItem>();

   // Initialize the map with SidebarItems
   sortedEntries.forEach(entry => {
      const { id, slug, data } = entry;
      const { title, description, "sidebar-label": label, "sidebar-position": position, "category-title": categoryTitle, type, versions } = data;
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
      });
   });

   /**
    *
    * @param id
    * @returns A version string or null
    */
   const extractVersionFromSlug = (id: string): string | undefined => {
      const idParts = id.split('/');
      // If content is versioned, it will always be at the 3rd position
      const versionIndex = 2;
      const matchedVersion = versionRegex.exec(idParts[versionIndex]);
      return matchedVersion ? matchedVersion[0] : undefined;
   };

   // Build the parent-child relationships and push to sdk or api based on the slug
   sortedEntries.forEach(entry => {
      const slugParts = entry.slug.split('/');
      const type = slugParts[1]; // This will be either "sdk" or "api"
      const structuredEntry = slugMap.get(entry.slug)!; // Get the initialized SidebarItem

      // Extract version from the entry id
      const structuredEntryVersion = extractVersionFromSlug(structuredEntry.id);
      structuredEntry.version = structuredEntryVersion ? structuredEntryVersion : undefined;

      // Push the entry to the correct part of the hierarchy (sdk or api)
      if (type === "sdk") {
         hierarchy.sdk.push(structuredEntry);
      } else if (type === "api") {
         hierarchy.api.push(structuredEntry);
      }

      // Find all potential children by checking if the slug is a direct parent (only one level deeper)
      slugMap.forEach((potentialChild, potentialChildSlug) => {
         if (!potentialChildSlug.startsWith(entry.slug + "/")) {
            return;
         }
         const parentSlugParts = entry.slug.split('/');
         const childSlugParts = potentialChild.slug.split('/');

         let isSpecialCase = false

         if (versionRegex.exec(childSlugParts[3])) {
            isSpecialCase = (parentSlugParts.length === 2 && childSlugParts.length === 4)
         }

         // Normal case: Child should only be one level deeper
         const isDirectChild = childSlugParts.length === parentSlugParts.length + 1;

         // If the special case or direct child case applies
         if ((isSpecialCase || isDirectChild) && potentialChildSlug.startsWith(entry.slug + '/') && potentialChildSlug !== entry.slug) {
            // Set the parent slug for the child
            potentialChild.parent = entry.slug;
            structuredEntry.children?.push(potentialChild)
         }
      });
   });

   return hierarchy; // Return sdk and api arrays inside the hierarchy object
};
