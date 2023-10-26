import type { MarkdownHeading } from "astro";
import type { FC } from "react";
import { unescape } from "html-escaper";
import { useState, useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { $tabs } from "@store/tabStore";
import classNames from "classnames";
import ChevronLeft from "@components/Icons/react/ChevronLeft";
import ChevronRight from "@components/Icons/react/ChevronRight";

import "./right-sidebar.css";

type ItemOffsets = {
  id: string;
  topOffset: number;
};

const TableOfContents: FC<{ headings: MarkdownHeading[] }> = ({
  headings = [],
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
      <div className="flex flex-row items-center justify-between pb-2">
        <h2 id={onThisPageID} className="text-base font-medium">
          CONTENTS
        </h2>
        <div className="w-6 h-6">
          {!isOpened ? (
            <span
              className="open-button hover:cursor-pointer"
              onClick={() => setIsOpened(true)}
            >
              <ChevronLeft />
            </span>
          ) : (
            <span
              className="close-button hover:cursor-pointer"
              onClick={() => setIsOpened(false)}
            >
              <ChevronRight />
            </span>
          )}
        </div>
      </div>
      {isOpened ? (
        <ul ref={toc}>
          {headingsLocal
            .filter(({ depth }) => depth > 1 && depth < 4)
            .map((heading) => (
              <li
                key={heading.slug}
                className={classNames(
                  `header-link before:content-none text-secondary depth-${heading.depth}`,
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
      ) : null}
    </>
  );
};

export default TableOfContents;
