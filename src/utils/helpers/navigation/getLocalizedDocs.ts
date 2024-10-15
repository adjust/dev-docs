import { KNOWN_LANGUAGE_CODES } from "@i18n/locales";
import { getCollection } from "astro:content";
import type { ContentCollectionEntry } from "@utils/helpers/navigation/types";

const docs = await getCollection("docs");

/**
 * Fetches all docs from our content collection and polyfills any missing localized content with
 * English content. Ensures that if a child exists, its parent also exists.
 * @returns An array of ContentCollectionEntry items
 */
const getLocalizedDocs = async (docs): Promise<ContentCollectionEntry[]> => {

   // Filter English docs (as fallback)
   const defaultLangFallback = docs.filter((doc) =>
      doc.slug.startsWith("en/")
   );

   // Helper function to find the parent slug of a given slug
   const findParentSlug = (slug: string) => {
      const parts = slug.split('/');
      if (parts.length <= 2) return null;
      return parts.slice(0, -1).join('/');
   };

   // Process each language
   return KNOWN_LANGUAGE_CODES.flatMap((langKey) => {
      const docsByLang = docs.filter((doc) => doc.slug.startsWith(`${langKey}/`));
      const allSlugs = new Set(docsByLang.map((doc) => doc.slug));

      let localizedDocs = [...docsByLang];

      // Loop through each English doc and check if there's a localized version
      defaultLangFallback.forEach((doc) => {
         const localizedSlug = doc.slug.replace(/^en\//, `${langKey}/`);

         // If the localized version doesn't exist, add the fallback version
         if (!allSlugs.has(localizedSlug)) {
            localizedDocs.push({
               ...doc,
               slug: localizedSlug,
               isFallback: true,
            });
            allSlugs.add(localizedSlug);
         }
         const parentSlug = findParentSlug(localizedSlug);
         if (parentSlug && !allSlugs.has(parentSlug)) {
            const parentDoc = defaultLangFallback.find((d) => d.slug === `en/${parentSlug.split('/').slice(1).join('/')}`);
            if (parentDoc) {
               localizedDocs.push({
                  ...parentDoc,
                  slug: parentSlug,
                  isFallback: true, // Mark as fallback
               });
               allSlugs.add(parentSlug);
            }
         }
      });

      return localizedDocs;
   });
}

// Call the function to get the localized docs
export const localizedDocs = await getLocalizedDocs(docs);
