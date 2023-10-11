/** @jsxImportSource react */
import type { FC } from "react";
import classNames from "classnames";

import { getLanguageFromURL } from "../../languages";
import type { getNavigationEntries } from "../../utils/helpers/navigation/getNavigationEntries";
import LeftSidebarItem from "./LeftSidebarItem";

type Props = {
  currentPage: string;
  navigationEntries: ReturnType<typeof getNavigationEntries>;
};

const LeftSidebar: FC<Props> = ({ currentPage, navigationEntries }) => {
  const currentPageMatch = currentPage.endsWith("/")
    ? currentPage.slice(1, -1)
    : currentPage.slice(1);

  const langCode = getLanguageFromURL(currentPage);
  const sidebar = navigationEntries[langCode];

  return (
    <div className="xs:h-screen lg:h-[calc(100vh-86px)] lg:sticky lg:top-[86px] border-r-[1.5px] border-[#E0EAFF] bg-secondary">
      <nav
        id="sidebar"
        className="w-[294px] break-words lg:flex flex-col gap-y-[18px] pr-6 text-secondary  lg:h-[calc(100%-62px)] lg:pb-6 lg:pl-[18px] lg:pt-12 xs:pt-4 xs:h-full lg:static xs:fixed xs:inset-y-0 xs:left-0 xs:z-30 xs:shadow-right xs:pl-3 lg:shadow-none overflow-y-auto print:hidden"
      >
        {sidebar.children.map((child, i) => (
          <div
            key={`${child.slug}_${i}`}
            className={classNames("relative flex items-start", {
              "nav_top-category pb-4": currentPage === child.slug,
            })}
          >
            <LeftSidebarItem
              currentPage={currentPageMatch}
              sidebarData={child}
              level={child.level}
            />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidebar;
