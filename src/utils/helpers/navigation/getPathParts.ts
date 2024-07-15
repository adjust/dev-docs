export const getPathParts = (currentPage: string) => {
  const pathParts = currentPage.split("/").filter((part) => part !== "");

  const parts = pathParts.reduce((result, _, index) => {
    const fullPath = `/${pathParts.slice(0, index + 1).join("/")}`;

    result.push(fullPath);

    return result;
  }, [] as string[]);

  return parts;
};
