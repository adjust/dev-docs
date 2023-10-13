import type { FC } from "react";
import classNames from "classnames";

import { getLanguageFromURL } from "../../languages";
import type { getNavigationEntries } from "../../utils/helpers/navigation/getNavigationEntries";
import NavigationItem from "./NavigationItem";
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import LanguageSwitch from "./LanguageSwitch";
import { LOCALE_NAMES } from "@i18n/locales";

interface LeftSidebarProps {
  currentPage: string;
  navigationEntries: ReturnType<typeof getNavigationEntries>;
}

const LeftSidebar: FC<LeftSidebarProps> = ({
  currentPage,
  navigationEntries,
}) => {
  const currentPageMatch = currentPage.endsWith("/")
    ? currentPage.slice(1, -1)
    : currentPage.slice(1);

  const langCode = getLanguageFromURL(currentPage);
  const sidebar = navigationEntries[langCode];

  return (
    <div className="xs:h-screen lg:h-screen max-h-screen flex flex-col lg:sticky lg:top-0 border-r-[1.5px] bg-secondary border-[#E0EAFF]">
      {/* Header with audience switch */}
      <SidebarHeader />
      {/* Search input */}
      <SidebarSearch lang="en" />
      {/* Navigation */}
      <nav
        id="sidebar"
        className="w-[294px] break-words lg:flex flex-col gap-y-[18px] pr-6 text-secondary lg:h-[calc(100%-62px)] lg:pb-6 lg:pl-[18px] lg:pt-0 xs:pt-4 xs:h-full lg:static xs:fixed xs:inset-y-0 xs:left-0 xs:z-30 xs:shadow-right xs:pl-3 lg:shadow-none overflow-y-auto print:hidden"
      >
        {sidebar.children.map((child, i) => (
          <div
            key={`${child.slug}_${i}`}
            className={classNames("relative flex items-start", {
              "nav_top-category pb-4": currentPage === child.slug,
            })}
          >
            <NavigationItem
              currentPage={currentPageMatch}
              sidebarData={child}
              level={child.level}
            />
          </div>
        ))}
      </nav>
      <div className="h-[63px] p-[22px] border-t-[1px] border-[#CDD0E0]">
        <LanguageSwitch lang="en" locales={LOCALE_NAMES} onChange={() => {}} />
      </div>
    </div>
  );
};

export default LeftSidebar;
