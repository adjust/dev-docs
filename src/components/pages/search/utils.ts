export const getSearchParams = () => {
  const query = new URLSearchParams(document.location.search);
  const category = query.get("category") || "all";
  const platform = query.get("platform") || "all";

  return {
    category,
    platform,
  };
};

export const setSearchParams = ({
  categoryValue,
  platformValue,
}: {
  categoryValue?: string;
  platformValue?: string;
}) => {
  const { category, platform } = getSearchParams();

  document.location.search = `category=${categoryValue ?? category}&platform=${
    platformValue ?? platform
  }`;
};
