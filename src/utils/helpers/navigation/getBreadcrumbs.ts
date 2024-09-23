import type { Breadcrumb } from "@utils/helpers/navigation/types";
import { findEntryBySlug } from "@utils/helpers/navigation/findEntryBySlug";

/**
 * Fetches an array of BreadCrumb items for the current page
 * @param currentPage The current page slug
 * @returns An array of BreadCrumb items
 */
export const getBreadcrumbs = (currentPage: string): Breadcrumb[] => {
   const breadcrumbs: Breadcrumb[] = [];

   /**
    * Populates the BreadCrumb array by following the parent links of a given entry.
    * Stops when there are no more parents to populate.
    * @param slug The current page slug
    * @param level The level of the current page
    */
   const traverseHierarchy = (slug: string, level: number): void => {
      const entry = findEntryBySlug(slug);

      if (entry) {
         breadcrumbs.unshift({
            title: entry.categoryTitle ? entry.categoryTitle : entry.title,
            url: entry.slug,
            level: level
         });

         if (entry.parent) {
            const parentEntry = findEntryBySlug(entry.parent);
            if (parentEntry) {
               traverseHierarchy(parentEntry.slug, level - 1);
            }
         }
      }
   }
   // Traverse the hierarchy starting with the current page
   traverseHierarchy(currentPage, 1);

   return breadcrumbs;
};
