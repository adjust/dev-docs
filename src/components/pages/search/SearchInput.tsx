import { debounce } from "lodash-es";
import { type FC, useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "@i18n/utils";
import type { Locales } from "@i18n/locales";

import { getSearchParams, setSearchParams } from "./utils";

const SearchInput: FC<{ lang: string }> = ({ lang }) => {
  const t = useTranslations(lang as keyof Locales);

  const inputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  const onSearchChanges = (value: string) => {
    setSearchParams({ searchValue: value, pageValue: 1 });
  };
  const debouncedLogUrl = useCallback(debounce(onSearchChanges, 700), []);

  const debouncedChange = (value: string) => {
    setSearchValue(value);
    debouncedLogUrl(value);
  };

  const onClear = () => {
    setSearchValue("");
    onSearchChanges("");
  };

  useEffect(() => {
    const { query } = getSearchParams();
    setSearchValue(query);
  }, []);

  return (
    <div className="mb-6 relative">
      <label htmlFor="search-input">
        <img
          src="/images/search/icon-search.svg"
          alt="icon search"
          className="absolute top-[18px] left-[33px]"
        />
      </label>
      <input
        className="w-full h-[65px] bg-white rounded-[10px] text-heading-4 pl-[70px] pr-10"
        type="text"
        id="search-input"
        ref={inputRef}
        placeholder={t("search.placeholder")}
        value={searchValue}
        autoFocus
        onChange={({ target }) => debouncedChange(target.value)}
      />
      {searchValue && (
        <img
          src="/images/search/X.svg"
          alt="clear search button"
          onClick={onClear}
          width={22}
          height={22}
          className="absolute cursor-pointer right-[10px] top-[22px]"
        />
      )}
    </div>
  );
};

export default SearchInput;
