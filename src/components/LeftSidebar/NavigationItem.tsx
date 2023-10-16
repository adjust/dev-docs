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
          {sidebarData?.children?.length && !sidebarData.topCategory ? (
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
              }
            )}
          >
            {sidebarData.title}
          </a>
        </div>
      </li>
      {isOpen
        ? sidebarData?.children?.map((child) => {
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
              <li className={classNames("nav-link", { "pl-4": level > 2 })}>
                <a
                  href={url}
                  className={classNames(
                    "block text-sm m-[1px] py-[0.3rem] px-4 no-underline hover:no-underline hover:text-link-active",
                    {
                      "text-link-active": currentPage === child.slug,
                    }
                  )}
                >
                  {child.title}
                </a>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default LeftSidebarItem;
