export const getPathParts = (currentPage: string, currentLang: string) => {
  // we don`t need to use lang from the current page url
  const langReg = new RegExp(`/${currentLang}(/|)`);
  const pageWithoutLang = currentPage.replace(langReg, "");

  const pathParts = pageWithoutLang.split("/").filter((part) => part !== "");

  const parts = pathParts.reduce((result, _, index) => {
    const fullPath = `/${pathParts.slice(0, index + 1).join("/")}`;

    result.push(fullPath);

    return result;
  }, [] as string[]);

  return parts;
};
