import { useState } from "preact/hooks";
import type { ComponentType } from "preact";

import type { CategoryEntry } from "src/utils/helpers/navigation/types";

const LeftSidebarItem: ComponentType<{
  currentPage: string;
  sidebarData: CategoryEntry;
  level: number;
}> = ({ currentPage, sidebarData, level = 1 }) => {
  const [isOpen, setIsOpen] = useState(sidebarData.collapsed);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul style={{ marginLeft: `${level * 3}px` }} className="pt-3">
      <li className="relative">
        <a
          href={"/" + sidebarData.slug}
          style={{
            backgroundColor:
              currentPage === sidebarData.slug ? "#2f3f54" : "#1f2937",
          }}
          className="p-1.5 inline-block w-full text-[1rem] font-bold mb-[0.5rem] uppercase no-underline"
        >
          {sidebarData.title}
        </a>
        {sidebarData?.children?.length && !sidebarData.topCategory ? (
          <button
            onClick={handleCollapse}
            className="p-0 absolute top-[5px] right-[8px]"
          >
            {isOpen ? "-" : "+"}
          </button>
        ) : null}

        {isOpen && (
          <ul style={{ marginLeft: `${level * 3}px` }}>
            {sidebarData?.children?.map((child) => {
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
                <>
                  <li className="nav-link">
                    <a
                      href={url}
                      aria-current={currentPage === child.slug ? "page" : false}
                      className={
                        "block text-[1rem] m-[1px] py-[0.3rem] px-4 no-underline"
                      }
                    >
                      {child.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </li>
      <style>
        {`
          .nav-groups {
            padding: 2rem 0;
            overflow-x: visible;
            overflow-y: auto;
          }

          .nav-groups > li + li {
            margin-top: 2rem;
          }

          .nav-groups > :first-child {
            padding-top: 15px;
          }

          .nav-groups > :last-child {
            margin-bottom: 3px;
          }

          .nav-group-title {
            font-size: 1rem;
            font-weight: 700;
            padding: 0.1rem 1rem;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
          }

          .nav-link a {
            font-size: 1rem;
            margin: 1px;
            padding: 0.3rem 1rem;
            font: inherit;
            color: inherit;
            text-decoration: none;
            display: block;
          }

          .nav-link a:hover,
          .nav-link a:focus {
            background-color: var(--theme-bg-hover);
          }

          .nav-link a[aria-current="page"] {
            color: var(--theme-text-accent);
            background-color: var(--theme-bg-accent);
            font-weight: 600;
          }

          @media (min-width: 50em) {
            .nav-groups {
              padding: 0;
            }
          }
        `}
      </style>
    </ul>
  );
};

export default LeftSidebarItem;
