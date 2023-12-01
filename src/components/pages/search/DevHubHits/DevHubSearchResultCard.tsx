import { FC, useMemo } from "react";
import classNames from "classnames";

import type { DevHubSearchResultCardProps, HitBreadcrumb } from "./types";

const DevHubSearchResultCard: FC<DevHubSearchResultCardProps> = ({ hit }) => {
  const url = useMemo(() => {
    return `https://help.adjust.com${hit.url}`;
  }, [hit]);

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
              >
                <a
                  className="cursor-pointer  text-sm hover:text-link-active text-secondary font-medium"
                  href={`/${breadcrumb.url}`}
                >
                  {breadcrumb.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a href={url} className="group flex flex-col">
        <h5 className="text-heading-5 font-semibold text-search-primary mt-3 mb-4 group-hover:text-link-active">
          {hit.title}
        </h5>
        <p className="text-heading-5 h-[40px] text-ellipsis overflow-hidden text-search-primary">
          {hit.content}
        </p>
      </a>
    </div>
  );
};

export default DevHubSearchResultCard;
