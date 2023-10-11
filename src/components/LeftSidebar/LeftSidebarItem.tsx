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
      className={classNames("list-none flex flex-col items-start gap-y-[8px]", {
        "level-1 ml-6": level === 2,
        "ml-4": level > 2,
      })}
    >
      <li
        key={sidebarData.title}
        className={classNames("relative hover:text-link-active  min-h-[31px]", {
          "text-link-active": currentPage === sidebarData.slug,
          "pl-4":
            level > 2 ||
            (sidebarData?.children?.length && !sidebarData.topCategory),
          active: currentPage === sidebarData.slug,
        })}
      >
        {/* collapse/expand button */}
        {sidebarData?.children?.length && !sidebarData.topCategory && (
          <div
            className={classNames(
              "absolute w-4 h-4 text-white flex justify-center items-center cursor-pointer left-[-10px] top-[5%]"
            )}
            onClick={handleCollapse}
          >
            <div className="z-10 text-lg  text-secondary relative">
              {isOpen ? "↓" : ">"}
            </div>
          </div>
        )}
        <a
          href={"/" + sidebarData.slug}
          className={classNames(
            "p-1.5 inline-block w-full text-[1rem] mb-[0.5rem] uppercase hover:no-underline",
            {
              "text-link-active": currentPage === sidebarData.slug,
              "font-bold": level === 1,
              "font-medium": isOpen,
              "font-normal": level > 1 && !isOpen,
            }
          )}
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
                className={classNames(
                  "block text-[1rem] m-[1px] py-[0.3rem] px-4 no-underline hover:no-underline hover:text-link-active",
                  {
                    "text-link-active": currentPage === child.slug,
                  }
                )}
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
