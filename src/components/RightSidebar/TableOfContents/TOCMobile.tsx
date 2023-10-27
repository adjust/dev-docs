import type { MarkdownHeading } from "astro";
import type { FC } from "react";
import { unescape } from "html-escaper";

import "../right-sidebar.css";

interface TableOfContentsMobileProps {
  onThisPageID: string;
  toc: React.RefObject<HTMLUListElement>;
  headingsLocal: MarkdownHeading[];
  currentID: string;
  onLinkClick: (e: HTMLLinkElement) => void;
}

const TableOfContentsMobile: FC<TableOfContentsMobileProps> = ({
  onThisPageID,
  toc,
  headingsLocal,
  currentID,
  onLinkClick,
}) => {
  return (
    <div className="xs:block lg:hidden border-[1px] p-2">
      <h2 id={onThisPageID} className="heading">
        On this page
      </h2>
      <ul ref={toc} className="pl-4">
        {headingsLocal
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map((heading) => (
            <li
              key={heading.slug}
              className={`header-link before:content-none depth-${
                heading.depth
              } ${
                currentID === heading.slug ? "current-header-link" : ""
              }`.trim()}
            >
              <a href={`#${heading.slug}`} onClick={onLinkClick}>
                {unescape(heading.text)}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TableOfContentsMobile;
