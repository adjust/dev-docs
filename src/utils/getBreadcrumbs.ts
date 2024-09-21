/**
 * Fetches breadcrumbs from the sidebar hierarchy for the given page and language.
 */

import type { Breadcrumb } from "@utils/types";
import { findEntryBySlug } from "@utils/findEntryBySlug";

/**
 * Fetches an array of BreadCrumb items for the current page
 * @param currentPage
 * @returns An array of BreadCrumb items
 */
export const getBreadcrumbs = (currentPage: string): Breadcrumb[] => {
   const breadcrumbs: Breadcrumb[] = [];

   /**
    * Populates the BreadCrumb array by following the parent links of a given entry.
    * Stops when there are no more parents to populate.
    * @param slug
    * @param level
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
