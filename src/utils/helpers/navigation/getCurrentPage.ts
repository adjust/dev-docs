/**
 * we should remove the last slash for the Production/Preview deployment(thing related to the SSR)
 */
export const getCurrentPage = (currentPage: string) => {
  return currentPage?.replace(/\/$/g, "").slice(1);
};
