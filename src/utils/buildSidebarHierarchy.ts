/**
 * Takes in an array of content and forms it into language trees that resemble the final
 * form of the sidebar to make it easier to build sidebar logic.
 */

import type { ContentCollectionEntry, LanguageTree, SidebarItem } from "@utils/types";

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
      const { slug, data } = entry;
      const { title, "sidebar-label": label, "sidebar-position": position, "category-title": categoryTitle, type } = data;
      slugMap.set(entry.slug, {
         title,
         slug,
         label,
         position,
         categoryTitle,
         children: [],
         versionedChildren: {},
         type
      });
   });

   /**
    *
    * @param id
    * @returns A version string or null
    */
   const extractVersionFromSlug = (id: string): string | null => {
      const idParts = id.split('/');
      const versionRegex = /^v\d$/gi;
      // Assuming version always comes after platform (e.g., `en/sdk/android/v4/...`)
      const versionIndex = 3; // Adjust this index based on your slug structure
      const matchedVersion = versionRegex.exec(idParts[versionIndex]);
      return matchedVersion ? matchedVersion[0] : null;
   };

   // Build the parent-child relationships and push to sdk or api based on the slug
   sortedEntries.forEach(entry => {
      const slugParts = entry.slug.split('/');
      const type = slugParts[1]; // This will be either "sdk" or "api"
      const structuredEntry = slugMap.get(entry.slug)!; // Get the initialized SidebarItem

      // Push the entry to the correct part of the hierarchy (sdk or api)
      if (type === "sdk") {
         hierarchy.sdk.push(structuredEntry);
      } else if (type === "api") {
         hierarchy.api.push(structuredEntry);
      }

      // Find all potential children by checking if the slug is a prefix of any other slug
      slugMap.forEach((potentialChild, potentialChildSlug) => {
         if (potentialChildSlug.startsWith(entry.slug + '/') && potentialChildSlug !== entry.slug) {
            // Set the parent slug for the child
            potentialChild.parent = entry.slug;

            // Extract version from the potential child's slug
            const potentialChildVersion = extractVersionFromSlug(potentialChildSlug);

            // If the potential child has a version that matches, add to versionedChildren
            if (entry.data.versions && potentialChildVersion) {
               const versionedChildren = structuredEntry.versionedChildren;
               const versionKey = potentialChildVersion;

               // Initialize array for this version if it doesn't exist
               if (!versionedChildren![versionKey]) {
                  versionedChildren![versionKey] = [];
               }

               // Push the potential child to the correct version
               versionedChildren![versionKey].push(potentialChild);
            } else {
               // If no version or the child is unversioned, handle as a normal child
               structuredEntry.children!.push(potentialChild);
            }
         }
      });
   });

   return hierarchy; // Return sdk and api arrays inside the hierarchy object
};
