import type { MarkdownHeading } from "astro";
import type { FC } from "react";
import { unescape } from "html-escaper";
import { useState, useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { $tabs } from "@store/tabStore";
import classNames from "classnames";
import ChevronRight from "@components/Icons/react/ChevronRight";

import "../right-sidebar.css";
import TableOfContentsMobile from "./TOCMobile";
import CollapsedTOC from "./CollapsedTOC";

type ItemOffsets = {
  id: string;
  topOffset: number;
};

const TableOfContents: FC<{ headings: MarkdownHeading[]; title: string }> = ({
  headings = [],
  title,
}) => {
  const [headingsLocal, setHeadingsLocal] = useState(headings);
  const tabs = useStore($tabs);
  const toc = useRef<HTMLUListElement>(null);
  const onThisPageID = "on-this-page-heading";
  const itemOffsets = useRef<ItemOffsets[]>([]);
  const [currentID, setCurrentID] = useState("overview");
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("article :is(h1, h2, h3, h4)");
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };

    getItemOffsets();
    window.addEventListener("resize", getItemOffsets);

    return () => {
      window.removeEventListener("resize", getItemOffsets);
    };
  }, []);

  useEffect(() => {
    if (!toc.current) return;

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target;
          if (id === onThisPageID) continue;
          setCurrentID(entry.target.id);
          break;
        }
      }
    };

    const observerOptions: IntersectionObserverInit = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: "-100px 0% -66%",
      threshold: 1,
    };

    const headingsObserver = new IntersectionObserver(
      setCurrent,
      observerOptions
    );

    // Observe all the headings in the main page content.
    document
      .querySelectorAll("article :is(h1,h2,h3)")
      .forEach((h) => headingsObserver.observe(h));

    // Stop observing when the component is unmounted.
    return () => headingsObserver.disconnect();
  }, [toc.current]);

  useEffect(() => {
    if (tabs.items.length) {
      // logic for removing tabs labels from TOC
      const filteredHeadings = headings.filter(
        (heading) =>
          !tabs.items.find(
            (tab) => tab.label === heading.text && heading.depth === 3
          )
      );
      setHeadingsLocal(filteredHeadings);
    }
  }, [tabs]);

  const onLinkClick = (e: HTMLLinkElement) => {
    setCurrentID(e.href.replace("#", ""));
  };

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
                .filter(({ depth }) => depth > 1 && depth < 4)
                .map((heading) => (
                  <li
                    key={heading.slug}
                    className={classNames(
                      `header-link before:content-none depth-${heading.depth}`,
                      {
                        "current-header-link": currentID === heading.slug,
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
