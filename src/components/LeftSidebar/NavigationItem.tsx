import { useState } from "react";
import type { FC } from "react";
import classNames from "classnames";
import { Icon } from "@adjust/components";

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

  const isChilds = sidebarData?.children?.length && !sidebarData.topCategory;

  return (
    <ul
      className={classNames("list-none flex flex-col items-start gap-y-[8px]", {
        "pl-0": level === 2,
        "ml-3": level > 2,
      })}
    >
      <li
        key={sidebarData.title}
        className={classNames(
          "relative hover:text-link-active  min-h-[31px] text-sm",
          {
            "text-link-active": currentPage === sidebarData.slug,
            "pl-2": level > 2,
            active: currentPage === sidebarData.slug,
          }
        )}
      >
        {/* collapse/expand button */}
        <div
          className="flex flex-row items-center cursor-pointer gap-x-[5px]"
          onClick={handleCollapse}
        >
          {isChilds ? (
            <>
              {isOpen ? (
                <Icon name="ChevronDown" size="small" />
              ) : (
                <Icon name="ChevronRight" size="small" />
              )}
            </>
          ) : null}
          <a
            href={"/" + sidebarData.slug}
            className={classNames(
              "inline-block w-full text-sm hover:no-underline",
              {
                "text-link-active": currentPage === sidebarData.slug,
                "font-bold": level === 1,
                "font-medium": isOpen,
                "font-normal": level > 1 && !isOpen,
                "ml-[21px]": level > 2 && !isChilds,
              }
            )}
          >
            {sidebarData.title}
          </a>
        </div>
      </li>
      {isOpen
        ? sidebarData?.children?.map((child) => (
            <LeftSidebarItem
              currentPage={currentPage}
              sidebarData={child}
              level={child.level}
            />
          ))
        : null}
    </ul>
  );
};

export default LeftSidebarItem;
