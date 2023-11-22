export const getSearchParams = () => {
  const query = new URLSearchParams(document.location.search);
  const category = query.get("category") || "all";
  const platform = query.get("platform") || "all";
  const searchQuery = query.get("query") || "";

  return {
    category,
    platform,
    query: searchQuery,
  };
};

export const setSearchParams = ({
  categoryValue,
  platformValue,
  searchValue,
}: {
  categoryValue?: string;
  platformValue?: string;
  searchValue?: string;
}) => {
  const { query, category, platform } = getSearchParams();

  document.location.search = `query=${searchValue ?? query}&category=${
    categoryValue ?? category
  }&platform=${platformValue ?? platform}`;
};
