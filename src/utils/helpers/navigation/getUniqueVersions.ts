import { fetchedDocs } from "./buildLanguageTree";
import type { ContentCollectionEntry } from "./types";

/**
 * Fetch all unique version entries for SDK documentation
 * @param entries An array of ContentCollectionEntry
 * @returns An array of SDK versions
 */
const getUniqueVersions = (entries: ContentCollectionEntry[]): ContentCollectionEntry["data"]["versions"] => {
   // Only target SDK content
   const sdkEntriesWithVersions = entries.filter(entry =>
      entry.data.versions && entry.slug.split('/')[1] === 'sdk'
   );

   // Extract all version numbers from the versions array
   const allVersions = sdkEntriesWithVersions.flatMap(entry => entry.data.versions!);

   // Return all unique values sorted by version
   const uniqueVersions = Array.from(new Map(allVersions.map(version => [version.value, version])).values());

   return uniqueVersions;
};

export const uniqueSdkVersions = getUniqueVersions(fetchedDocs);
