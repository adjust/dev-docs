import { useState } from "react";
import { Icon } from "@adjust/components";

import IconSearch from "@components/Icons/IconSearch";

const SidebarSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex items-start bg-secondary border-b-[1px] border-icon-neutral pb-[9px] mx-6 mb-16 focus-within:border-link-active min-h-[27px]">
      <label htmlFor="sidebar-search" className="mr-2.5">
        <IconSearch />
      </label>
      <input
        id="sidebar-search"
        className="bg-secondary text-[15px] w-full focus-visible:outline-none placeholder:text-icon-neutral caret-icon-neutral pr-2"
        placeholder="Find anything"
        value={searchValue}
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
