import { useState } from "react";
import type { FC, KeyboardEvent } from "react";
import { Icon } from "@adjust/components";

import IconSearch from "@components/Icons/IconSearch";

import type { SidebarSearchProps } from "./types";

const SidebarSearch: FC<SidebarSearchProps> = ({ lang }) => {
  const [searchValue, setSearchValue] = useState("");

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      return location.replace(`/${lang}/search?query=${searchValue}`);
    }
  };

  return (
    <div className="flex items-start bg-secondary border-b-[1px] border-icon-neutral pb-[9px] mx-6 mb-16 focus-within:border-link-active min-h-[28px]">
      <label htmlFor="sidebar-search" className="mr-2.5">
        <IconSearch />
      </label>
      <input
        id="sidebar-search"
        className="bg-secondary text-[15px] w-full focus-visible:outline-none placeholder:text-icon-neutral caret-icon-neutral pr-2"
        placeholder="Find anything"
        value={searchValue}
        onKeyDown={onKeyDown}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      {searchValue && (
        <div className="cursor-pointer" onClick={() => setSearchValue("")}>
          <Icon name="CrossFilled" size="small" color="ColorNeutral80" />
        </div>
      )}
    </div>
  );
};

export default SidebarSearch;
