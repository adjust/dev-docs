export const getSearchParams = () => {
  const query = new URLSearchParams(document.location.search);
  const category = query.get("category") || "all";
  const platform = query.get("platform") || "all";
  const searchQuery = query.get("query") || "";
  const page = parseInt(query.get("page")!) || 1;

  return {
    category,
    platform,
    query: searchQuery,
    page,
  };
};

export const setSearchParams = ({
  categoryValue,
  platformValue,
  searchValue,
  pageValue,
}: {
  categoryValue?: string;
  platformValue?: string;
  searchValue?: string;
  pageValue?: number;
}) => {
  const { query, category, platform, page } = getSearchParams();

  document.location.search = `query=${searchValue ?? query}&page=${
    pageValue ?? page
  }&category=${categoryValue ?? category}&platform=${
    platformValue ?? platform
  }`;
};
