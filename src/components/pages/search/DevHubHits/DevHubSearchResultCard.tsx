import type { FC } from "react";
import classNames from "classnames";
import { Snippet } from "react-instantsearch";

import { TOKENIZED_TYPESENSE_LANGS } from "@i18n/locales";

import type { DevHubSearchResultCardProps, HitBreadcrumb } from "./types";

const DevHubSearchResultCard: FC<DevHubSearchResultCardProps> = ({ hit }) => {
  const isEllipsis = !!hit._snippetResult?.content?.matchedWords?.length;
  const isTokenizedLang = TOKENIZED_TYPESENSE_LANGS.includes(hit.lang);
  const title = isTokenizedLang ? hit[`title_${hit.lang}`] : hit.title;
  const content = isTokenizedLang ? `content_${hit.lang}` : "content";

  return (
    <div className="max-w-[956px]">
      <div aria-label="search-result-breadcrumbs">
        <nav>
          <ul className="flex flex-row flex-wrap gap-x-6">
            {hit.breadcrumbs.map((breadcrumb: HitBreadcrumb, i: number) => (
              <li
                className={classNames(" relative", {
                  "breadcrumbs-item":
                    hit.breadcrumbs.length > 1 &&
                    i !== hit.breadcrumbs.length - 1,
                })}
                key={i}
              >
                <a
                  className="cursor-pointer  text-sm hover:text-link-active text-secondary font-medium"
                  href={breadcrumb.url}
                >
                  {breadcrumb.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a href={hit.url} className="group flex flex-col">
        <h5 className="text-xl font-semibold text-search-primary mt-3 mb-4 group-hover:text-link-active">
          {title}
        </h5>
        <p className="text-heading-5 h-[40px] text-ellipsis overflow-hidden text-search-primary">
          <Snippet
            hit={hit}
            attribute={content}
            className={classNames("overflow-hidden text-ellipsis box", {
              "after:ml-1 after:content-['...']  before:mr-1 before:content-['...']":
                isEllipsis,
            })}
            style={{
              WebkitBoxOrient: "vertical",
              MozBoxOrient: "vertical",
              WebkitLineClamp: 2,
              display: "-webkit-box",
            }}
          />
        </p>
      </a>
    </div>
  );
};

export default DevHubSearchResultCard;
