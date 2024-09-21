/*
Since our content collection isn't properly split up by language, we instead need to split it up by getting
the language code from the beginning of the slug.
*/

import { KNOWN_LANGUAGE_CODES } from "@i18n/locales";
import { getCollection } from "astro:content";

/**
 * Fetches all docs from our content collection and polyfills any missing localized content with
 * English content
 * @returns An array of ContentCollection items
 */
const getLocalizedDocs = async () => {
   const docs = await getCollection("docs")

   const defaultLangFallback = docs.filter((doc) =>
      doc.slug.startsWith("en/")
   );

   return KNOWN_LANGUAGE_CODES.flatMap((langKey) => {
      const docsByLang = docs.filter((doc) => doc.slug.startsWith(`${langKey}/`));

      // Add English pages only if they don't exist in the target language
      const usedArray = docsByLang.length
         ? docsByLang
         : defaultLangFallback.map((doc) => ({
            ...doc,
            slug: `${langKey}/${doc.slug}`,
         }));

      return usedArray.map((doc) => ({
         ...doc
      }));
   });
}

// Call the function to get the localized docs
export const localizedDocs = await getLocalizedDocs();
