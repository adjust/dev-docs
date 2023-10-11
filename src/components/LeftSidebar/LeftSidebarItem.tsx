/** @jsxImportSource react */
import { useState } from "react";
import type { FC } from "react";
import classNames from "classnames";

import type { CategoryEntry } from "src/utils/helpers/navigation/types";

const LeftSidebarItem: FC<{
  currentPage: string;
  sidebarData: CategoryEntry;
  level: number;
}> = ({ currentPage, sidebarData, level = 1 }) => {
  const [isOpen, setIsOpen] = useState(sidebarData.collapsed);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul
      data-testid={classNames({
        "sidebar.nav-tree-node": level > 1,
        "sidebar.main-nav-tree-node": level === 1,
      })}
      className={classNames("list-none flex flex-col items-start gap-y-[8px]", {
        "level-1 ml-6": level === 2,
        "ml-4": level > 2,
      })}
    >
      <li
        key={sidebarData.title}
        className={classNames(
          "font-body relative hover:text-link-active  min-h-[31px]",
          {
            "text-link-active": currentPage === sidebarData.slug,
            "pl-4":
              level > 2 ||
              (sidebarData?.children?.length && !sidebarData.topCategory),
            active: currentPage === sidebarData.slug,
          }
        )}
      >
        {/* collapse/expand button */}
        {sidebarData?.children?.length && !sidebarData.topCategory && (
          <div
            data-testid="nav-tree-node.expand-collapse-button"
            className={classNames(
              "absolute w-4 h-4 text-white flex justify-center items-center cursor-pointer left-[-10px] top-[5%]"
            )}
            onClick={handleCollapse}
          >
            <div className="z-10 text-lg font-medium text-secondary relative">
              {isOpen ? "↓" : ">"}
            </div>
          </div>
        )}
        <a
          href={"/" + sidebarData.slug}
          className="p-1.5 inline-block w-full text-[1rem] font-bold mb-[0.5rem] uppercase no-underline"
        >
          {sidebarData.title}
        </a>
      </li>
      {isOpen &&
        sidebarData?.children?.map((child) => {
          const url = "/" + child.slug;
          if (child?.children?.length) {
            return (
              <LeftSidebarItem
                currentPage={currentPage}
                sidebarData={child}
                level={child.level}
              />
            );
          }
          return (
            <li className="nav-link">
              <a
                href={url}
                className={
                  "block text-[1rem] m-[1px] py-[0.3rem] px-4 no-underline"
                }
              >
                {child.title}
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default LeftSidebarItem;
