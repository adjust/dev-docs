/**
 * Creates a tree of content for each supported language. This is used for the
 * sidebar as well as for helper functions that query the collection.
 */

import { buildSidebarHierarchy } from "@utils/helpers/navigation/buildSidebarHierarchy";
import { localizedDocs } from "@utils/helpers/navigation/getLocalizedDocs";
import { Languages, type ContentCollectionEntry, type LanguageTrees, type SidebarItem } from "@utils/helpers/navigation/types";

/**
 *
 * @param localizedDocs
 * @returns A language tree for all languages containing the polyfilled content arrays from the fetch step
 */

const buildLanguageTree = async (localizedDocs: ContentCollectionEntry[]): Promise<[LanguageTrees, Map<string, SidebarItem>]> => {
   // Initialize a language tree
   let languageTree: LanguageTrees = {
      "en": {
         sdk: [],
         api: []
      },
      "ja": {
         sdk: [],
         api: []
      },
      "ko": {
         sdk: [],
         api: []
      },
      "zh": {
         sdk: [],
         api: []
      },
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

      slugMap.forEach((value, key) => {
         fullSlugMap.set(key, value);
      });
   });

   return [languageTree, fullSlugMap];
};

export const [languageTree, slugMap] = await buildLanguageTree(localizedDocs);
