/**
 * Updates a given page slug to a standard format for both production and dev server builds
 * @param slug The current page slug
 * @returns The altered string (with preceding and trailing slashes removed).
 */
export const getCurrentPage = (slug: string) => {
  return slug?.replace(/^\/|\/$/g, "");
};
