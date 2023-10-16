import type { FC } from "react";
import classNames from "classnames";

import { getLanguageFromURL } from "../../languages";
import type { getNavigationEntries } from "../../utils/helpers/navigation/getNavigationEntries";
import NavigationItem from "./NavigationItem";

interface NavigationProps {
  currentPage: string;
  navigationEntries: ReturnType<typeof getNavigationEntries>;
}

const Navigation: FC<NavigationProps> = ({
  currentPage,
  navigationEntries,
}) => {
  const currentPageMatch = currentPage.endsWith("/")
    ? currentPage.slice(1, -1)
    : currentPage.slice(1);

  const langCode = getLanguageFromURL(currentPage);
  const sidebar = navigationEntries[langCode];

  return (
    <nav
      id="sidebar"
      className="w-[294px] break-words flex flex-col gap-y-[18px] pr-6 text-secondary lg:h-[calc(100%-62px)] lg:pb-6 lg:pl-[18px] lg:pt-0 xs:pt-4 xs:h-full static xs:inset-y-0 xs:left-0 xs:z-30 xs:shadow-right xs:pl-3 lg:shadow-none overflow-y-auto print:hidden"
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
  );
};

export default Navigation;
