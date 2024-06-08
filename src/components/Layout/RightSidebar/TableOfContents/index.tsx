import { unescape } from "html-escaper";
import { type FC, useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { debounce } from "lodash-es";

import TableOfContentsMobile from "./TOCMobile";
import CollapsedTOC from "./CollapsedTOC";
import { getTocHeadings } from "@utils/helpers/toc/getTocHeadings";
import { useScrollSpy } from "@hooks/useScrollSpy";
import ChevronRight from "@components/Icons/react/ChevronRight";
import { type Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";

const HEADER_HEIGHT = 80;

const checkIsMobile = () => {
  const { innerWidth: width } = window;
  return width <= 1024;
};

const TableOfContents: FC<{
  headings: MarkdownHeadingWithId[];
  title: string;
  lang: string;
}> = ({ headings = [], title, lang }) => {
  const t = useTranslations(lang as keyof Locales);
  const [headingsLocal, setHeadingsLocal] = useState(headings);
  const [isMobile, setIsMobile] = useState(checkIsMobile());
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

  // Update the headings in the ToC when the page updates
  const updateHeadings = () => {
    // Only select headers that are included in the article and are not callouts
    const headers = document.querySelectorAll(
      ".article-content h1, .article-content h2:not([class^='Banner__']), .article-content h3, .article-content h4",
    );

    // Filter out any headers that are nested under a hidden div (non-selected version)
    const filteredHeaders = Array.from(headers).filter((header) => {
      const parentDiv = header.closest("div");
      return parentDiv && !parentDiv.matches(".hidden");
    });

    // Pass the headers to the getTocHeadings function to filter out headers
    const headingsParsed = getTocHeadings(filteredHeaders);
    setHeadingsLocal(headingsParsed);
  };

  useEffect(() => {
    // Update the headers on first load
    updateHeadings();
  }, []);

  useEffect(() => {
    // Ensure that URL changes are handled immediately
    const handleUrlChange = () => {
      setTimeout(updateHeadings, 0);
    };

    // Listen for the urlChange event registered in queryParamHelpers so that we can react to changes
    window.addEventListener("urlChange", handleUrlChange);

    return () => {
      window.removeEventListener("urlChange", handleUrlChange);
    };
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

  const handleResize = () => {
    setIsMobile(checkIsMobile());
  };

  const resizeHandler = debounce(handleResize, 500);

  // required for the mobile design
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // need to add right padding for the article when TOC is opened
  useEffect(() => {
    const article = document.getElementById("article-content");
    if (article) {
      article.className =
        isOpened && !isMobile && headingsLocal.length
          ? "article-content pr-[275px]"
          : "article-content";
    }
  }, [isOpened, isMobile, headingsLocal]);

  if (!headingsLocal.length) {
    return null;
  }

  return (
    <>
      {isOpened ? (
        <nav
          className={classNames(
            "transition duration-100 fixed top-[128px] lg:right-0 xxl:left-0 xxl:ml-[calc(100vw-312px-(100vw-100rem)/2)] z-10 w-[304px] h-[calc(100vh-112px)] md:right-0 xxl:ml-open-toc z-25 px-4 bg-white max-h-screen border-t border-[1px] border-bluish-grey rounded-tl-lg xs:hidden lg:block",
          )}
        >
          <div className="absolute top-0 bottom-0 flex items-start">
            <button
              onClick={() => setIsOpened(false)}
              className="rounded-md overflow-hidden -ml-8 mt-8 bg-white relative w-6 h-6 [&_svg]:hover:bg-[#0b58fe] [&_svg]:hover:text-white"
              aria-label={t("toc.toggle-label")}
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
                    key={heading.id}
                    className={classNames(
                      `header-link before:content-none depth-${heading.depth}`,
                      {
                        "current-header-link": clickedId
                          ? clickedId === heading.slug
                          : activeId === heading.slug,
                      },
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
        <CollapsedTOC setIsOpened={setIsOpened} lang={lang} />
      )}
      <TableOfContentsMobile
        onThisPageID={onThisPageID}
        toc={toc}
        headingsLocal={headingsLocal}
        lang={lang}
      />
    </>
  );
};

export default TableOfContents;
