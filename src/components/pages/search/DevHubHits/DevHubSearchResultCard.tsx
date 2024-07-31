import type { FC } from "react";
import classNames from "classnames";
import { Snippet } from "react-instantsearch";
import type { Hit } from "@algolia/client-search";

import type { DevHubSearchResultCardProps, HitBreadcrumb } from "./types";

const DevHubSearchResultCard: FC<DevHubSearchResultCardProps> = ({ hit }) => {
  // need to manually add an ellipsis cause Typesense doesn`t support this in the config
  const updateHitSnippet = (hit: Hit<any>) => {
    if (hit._snippetResult.content.matchedWords?.length) {
      hit._snippetResult.content.value = `... ${hit._snippetResult.content.value} ...`;
    }
    return hit;
  };

  const updatedHit = updateHitSnippet(hit);

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
          {hit.title}
        </h5>
        <p className="text-heading-5 h-[40px] text-ellipsis overflow-hidden text-search-primary">
          <Snippet hit={updatedHit} attribute="content" />
        </p>
      </a>
    </div>
  );
};

export default DevHubSearchResultCard;
