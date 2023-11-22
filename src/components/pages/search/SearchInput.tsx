import { debounce } from "lodash-es";
import { useEffect, useRef } from "react";

import { getSearchParams, setSearchParams } from "./utils";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchChanges = (value: string) => {
    setSearchParams({ searchValue: value });
  };

  const debouncedChange = debounce(onSearchChanges, 700);

  useEffect(() => {
    const { query } = getSearchParams();
    inputRef.current!.value = query;
  }, []);

  return (
    <div className="mb-6 relative">
      <img
        src="/images/search/icon-search.svg"
        className="absolute top-[18px] left-[33px]"
      />
      <input
        className="w-full h-[65px] bg-white rounded-[10px] text-heading-4 pl-[70px]"
        type="text"
        ref={inputRef}
        placeholder="Dev HUB search"
        autoFocus
        onChange={({ target }) => debouncedChange(target.value)}
      />
    </div>
  );
};

export default SearchInput;
