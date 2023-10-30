import type { MarkdownHeading } from "astro";
import type { FC } from "react";
import { unescape } from "html-escaper";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import TableOfContentsMobile from "./TOCMobile";
import CollapsedTOC from "./CollapsedTOC";
import { getTocHeadings } from "@utils/helpers/toc/getTocHeadings";
import { useScrollSpy } from "@hooks/useScrollSpy";
import ChevronRight from "@components/Icons/react/ChevronRight";

import "../right-sidebar.css";

const HEADER_HEIGHT = 80;

const TableOfContents: FC<{ headings: MarkdownHeading[]; title: string }> = ({
  headings = [],
  title,
}) => {
  const [headingsLocal, setHeadingsLocal] = useState(headings);
  const toc = useRef<HTMLUListElement>(null);
  const onThisPageID = "on-this-page-heading";
  const hashId = window.location?.hash?.replace("#", "") ?? "";
  const [clickedId, setClickedId] = useState(hashId);

  const [isOpened, setIsOpened] = useState(true);

  const { activeId } = useScrollSpy();

  const handleClick = (id: string) => {
    // need to scroll to the element without header height
    setTimeout(() => {
      window.scroll({
        top: window.scrollY + HEADER_HEIGHT,
        behavior: "smooth",
      });
    }, 50);
    setClickedId(id);
  };

  useEffect(() => {
    const headingsParsed = getTocHeadings();

    setHeadingsLocal(headingsParsed);
  }, []);

  useEffect(() => {
    if (hashId) {
      // required for the smooth scroll to the active header
      setTimeout(() => {
        document.getElementById(hashId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, []);

  if (!headingsLocal.length) {
    return null;
  }

  return (
    <>
      {isOpened ? (
        <nav
          className={classNames(
            "transition duration-100 fixed top-[128px] lg:right-0 xxl:left-0 xxl:ml-[calc(100vw-304px-(100vw-100rem)/2)] z-10 w-[304px] h-[calc(100vh-112px)] md:right-0 xxl:ml-open-toc z-25 px-4 bg-white max-h-screen border-t border-[1px] border-bluish-grey rounded-tl-lg xs:hidden lg:block"
          )}
        >
          <div className="absolute top-0 bottom-0 flex items-start">
            <button
              data-testid="table-of-contents.expand-collapse-button"
              onClick={() => setIsOpened(false)}
              className="toc-state-button rounded-md -ml-8 mt-8  bg-white relative w-6 h-6"
            >
              <ChevronRight />
            </button>
          </div>
          <div className="pl-4 pr-4 h-full overflow-y-auto flex flex-col">
            <ul className="w-full mt-8" ref={toc}>
              <li className="text-lg font-medium mb-4 leading-6">{title}</li>
              {headingsLocal
                .filter(({ depth }) => depth > 1)
                .map((heading) => (
                  <li
                    key={heading.slug}
                    className={classNames(
                      `header-link before:content-none depth-${heading.depth}`,
                      {
                        "current-header-link": clickedId
                          ? clickedId === heading.slug
                          : activeId === heading.slug,
                      }
                    )}
                  >
                    <a
                      href={`#${heading.slug}`}
                      onClick={() => handleClick(heading.slug)}
                    >
                      {unescape(heading.text)}
                    </a>
                  </li>
                ))}
            </ul>
            <div className="flex-grow" />
          </div>
        </nav>
      ) : (
        <CollapsedTOC setIsOpened={setIsOpened} />
      )}
      <TableOfContentsMobile
        onThisPageID={onThisPageID}
        toc={toc}
        headingsLocal={headingsLocal}
      />
    </>
  );
};

export default TableOfContents;
