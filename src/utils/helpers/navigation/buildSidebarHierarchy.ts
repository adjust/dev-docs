import type { ContentCollectionEntry, LanguageTree, SidebarItem } from "@utils/helpers/navigation/types";

const versionRegex = /v\d/i;

/**
 * Builds a JSON object that represents the content collection as a sidebar.
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
      const { title, description, "sidebar-label": label, "sidebar-position": position, "category-title": categoryTitle, type } = data;
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
         level: 0
      });
   });

   /**
    * Extracts the version number from a content collection entry ID.
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
      const structuredEntryVersion = extractVersionFromSlug(structuredEntry.id);
      structuredEntry.version = structuredEntryVersion ? structuredEntryVersion : undefined;

      // Find potential children by checking if the slug is a direct parent
      slugMap.forEach((potentialChild, potentialChildSlug) => {
         if (!potentialChildSlug.startsWith(entry.slug + "/")) {
            return;
         }

         const parentSlugParts = entry.slug.split('/');
         const childSlugParts = potentialChild.slug.split('/');

         // Special case: index pages in versioned folders are always 2 levels above their parent
         let isSpecialCase = false;
         if (versionRegex.exec(childSlugParts[3])) {
            isSpecialCase = (parentSlugParts.length === 2 && childSlugParts.length === 4);
         }

         // Normal case: the child should only be one level deeper than its parent
         const isDirectChild = childSlugParts.length === parentSlugParts.length + 1;

         if ((isSpecialCase || isDirectChild) && potentialChildSlug.startsWith(entry.slug + '/') && potentialChildSlug !== entry.slug) {
            // Set the parent for the child
            potentialChild.parent = entry.slug;
            if (potentialChild.position) {
               structuredEntry.children?.splice(potentialChild.position - 1, 0, potentialChild,)
            } else {
               structuredEntry.children?.push(potentialChild);
            }

            // Remove the entry from the root array since it's now in a child array
            if (type === "sdk") {
               hierarchy.sdk = hierarchy.sdk.filter(item => item.slug !== potentialChild.slug);
            } else if (type === "api") {
               hierarchy.api = hierarchy.api.filter(item => item.slug !== potentialChild.slug);
            }
         }
      });

      // If the entry has no parent, nest it directly under the type array
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

   return hierarchy; // Return sdk and api arrays inside the hierarchy object
};
