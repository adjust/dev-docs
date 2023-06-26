import type { ComponentType } from "preact";

import { getLanguageFromURL } from "../../languages";
import type { getNavigationEntries } from "../../utils/helpers/navigation/getNavigationEntries";
import LeftSidebarItem from "./LeftSidebarItem";

type Props = {
  currentPage: string;
  navigationEntries: ReturnType<typeof getNavigationEntries>;
};

const LeftSidebar: ComponentType<Props> = ({
  currentPage,
  navigationEntries,
}) => {
  const currentPageMatch = currentPage.endsWith("/")
    ? currentPage.slice(1, -1)
    : currentPage.slice(1);

  const langCode = getLanguageFromURL(currentPage);
  const sidebar = navigationEntries[langCode];

  return (
    <>
      <style>
        {`
          nav {
            width: 100%;
            margin-right: 1rem;
          }
        `}
      </style>
      <nav
        aria-labelledby="grid-left"
        className={"overflow-auto text-white w-full mr-4"}
      >
        {sidebar.children.map((child) => (
          <LeftSidebarItem
            currentPage={currentPageMatch}
            sidebarData={child}
            level={child.level}
          />
        ))}
      </nav>
    </>
  );
};

export default LeftSidebar;
