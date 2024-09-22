import { buildSidebarHierarchy } from "@utils/helpers/navigation/buildSidebarHierarchy";
import { localizedDocs } from "@utils/helpers/navigation/getLocalizedDocs";
import { Languages, type ContentCollectionEntry, type LanguageTrees, type SidebarItem } from "@utils/helpers/navigation/types";

/**
 * Creates a tree of content for each supported language with a queryable map.
 * This is used for the sidebar as well as for helper functions that query the collection.
 * @param localizedDocs
 * @returns A language tree for all languages containing the polyfilled content arrays from the fetch step.
 * @returns A map of all content entries searchable by slug. Used for building breadcrumbs.
 */
const buildLanguageTree = (localizedDocs: ContentCollectionEntry[]): [LanguageTrees, Map<string, SidebarItem>] => {
   let languageTree: LanguageTrees = {
      "en": { sdk: [], api: [] },
      "ja": { sdk: [], api: [] },
      "ko": { sdk: [], api: [] },
      "zh": { sdk: [], api: [] },
   };

   const languages = Object.values(Languages);
   let fullSlugMap = new Map<string, SidebarItem>();

   languages.forEach((language) => {
      // Filter the localizedDocs by language
      const content = localizedDocs.filter((doc) =>
         doc.slug.startsWith(language)
      );

      // Build the sidebar hierarchy and add each part to the relevant type
      const [hierarchy, slugMap] = buildSidebarHierarchy(content);
      languageTree[language] = hierarchy;

      // Merge slugMap into fullSlugMap
      fullSlugMap = new Map([...fullSlugMap, ...slugMap]);
   });

   return [languageTree, fullSlugMap];
};

export const [languageTree, slugMap] = buildLanguageTree(localizedDocs);
