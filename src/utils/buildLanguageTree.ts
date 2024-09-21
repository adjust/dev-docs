/**
 * Creates a tree of content for each supported language. This is used for the
 * sidebar as well as for helper functions that query the collection.
 */

import { buildSidebarHierarchy } from "@utils/buildSidebarHierarchy";
import { localizedDocs } from "@utils/getLocalizedDocs";
import { Languages, type ContentCollectionEntry, type LanguageTrees } from "@utils/types";

/**
 *
 * @param localizedDocs
 * @returns A language tree for all languages containing the polyfilled content arrays from the fetch step
 */

const buildLanguageTree = async (localizedDocs: ContentCollectionEntry[]) => {
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

   languages.forEach((language) => {
      // Filter the localizedDocs by language
      const content = localizedDocs.filter((doc) =>
         doc.slug.startsWith(language)
      );

      // Build the sidebar hierarchy and add each part to the relevant type
      const { sdk, api } = buildSidebarHierarchy(content);
      languageTree[language] = { sdk, api };
   });

   return languageTree;
};

export const languageTree = await buildLanguageTree(localizedDocs);
