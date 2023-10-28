import type { MarkdownHeading } from "astro";
import type { FC } from "react";
import { unescape } from "html-escaper";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import ChevronRight from "@components/Icons/react/ChevronRight";
import { debounce } from "lodash-es";

import "../right-sidebar.css";
import TableOfContentsMobile from "./TOCMobile";
import CollapsedTOC from "./CollapsedTOC";
import { getTocHeadings } from "@utils/helpers/toc/getTocHeadings";
import { useScrollSpy } from "@hooks/useScrollSpy";

const TableOfContents: FC<{ headings: MarkdownHeading[]; title: string }> = ({
  headings = [],
  title,
}) => {
  const [headingsLocal, setHeadingsLocal] = useState(headings);
  const toc = useRef<HTMLUListElement>(null);
  const onThisPageID = "on-this-page-heading";
  const [currentID, setCurrentID] = useState("overview");
  const [isOpened, setIsOpened] = useState(true);
  const tocEntryIds = headingsLocal.map((heading) => heading.slug);

  const { currentSection, registerHeading, unregisterHeading } =
    useScrollSpy(tocEntryIds);

  const recalcHeadings = () => {
    if (document.readyState === "complete") {
      headingsLocal.forEach((entry) => unregisterHeading(entry.slug));

      headingsLocal.forEach((entry) => {
        const element = document.getElementById(entry.slug);

        if (element) {
          registerHeading(
            entry.slug.replace("#", ""),
            element.getBoundingClientRect().top + window.pageYOffset
          );
        }
      });
    }
  };

  const handler = debounce(recalcHeadings, 500);

  useEffect(() => {
    const headingsParsed = getTocHeadings();

    setHeadingsLocal(headingsParsed);
  }, []);

  const onLinkClick = (e: HTMLLinkElement) => {
    setCurrentID(e.href);
  };

  useEffect(() => {
    document.addEventListener("readystatechange", recalcHeadings);
    window.addEventListener("resize", handler);

    return () => {
      document.removeEventListener("readystatechange", recalcHeadings);
      window.removeEventListener("resize", handler);
    };
  }, [toc]);

  useEffect(() => {
    headingsLocal.forEach((entry) => {
      const element = document.getElementById(entry.slug);

      if (element) {
        registerHeading(
          entry.slug.replace("#", ""),
          element.getBoundingClientRect().top + window.pageYOffset
        );
      }
    });

    return () => {
      headingsLocal.forEach((entry) => unregisterHeading(entry.slug));
    };
  }, [toc]);

  useEffect(() => {
    if (window.location.hash) {
      // required for the smooth scroll to the active header
      setTimeout(() => {
        window.scroll({
          top: window.scrollY - 80,
          behavior: "smooth",
        });
      });
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
                        "current-header-link": currentSection === heading.slug,
                      }
                    )}
                  >
                    <a href={`#${heading.slug}`} onClick={onLinkClick}>
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
        currentID={currentID}
        onLinkClick={onLinkClick}
      />
    </>
  );
};

export default TableOfContents;
