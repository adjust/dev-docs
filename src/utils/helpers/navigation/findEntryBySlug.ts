import { slugMap } from "@utils/helpers/navigation/buildLanguageTree";
import type { SidebarItem } from "@utils/helpers/navigation/types";

/**
 * Finds a SidebarItem by slug.
 * @param slug The current page slug
 * @returns a SidebarItem with a matching slug value or undefined if not found
 */
export const findEntryBySlug = (slug: string): SidebarItem | undefined => {
   return slugMap.get(slug);
};
