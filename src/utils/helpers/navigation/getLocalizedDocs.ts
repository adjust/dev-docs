import { KNOWN_LANGUAGE_CODES } from "@i18n/locales";
import { getCollection } from "astro:content";
import type { ContentCollectionEntry } from "@utils/helpers/navigation/types";

/**
 * Fetches all docs from our content collection and polyfills any missing localized content with
 * English content. Ensures that if a child exists, its parent also exists.
 * @returns An array of ContentCollectionEntry items
 */
const getLocalizedDocs = async (): Promise<ContentCollectionEntry[]> => {
   const docs = await getCollection("docs");

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

      // Use fallback content if language content is missing
      let localizedDocs = docsByLang.length > 0
         ? docsByLang
         : defaultLangFallback.map((doc) => ({
            ...doc,
            slug: doc.slug.replace(/^en\//, `${langKey}/`),
            isFallback: true, // Mark as fallback
         }));

      // Ensure that every child item has its parent in the same language
      const allSlugs = new Set(localizedDocs.map((doc) => doc.slug)); // Slugs we already have
      defaultLangFallback.forEach((doc) => {
         const localizedSlug = doc.slug.replace(/^en\//, `${langKey}/`);
         const parentSlug = findParentSlug(localizedSlug);

         // If a child exists but the parent is missing, polyfill the parent
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
export const localizedDocs = await getLocalizedDocs();
