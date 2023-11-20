import { FC, useMemo } from "react";

import type { HelpCenterResultCardProps } from "./types";

const DevHubSearchResultCard: FC<HelpCenterResultCardProps> = ({ hit }) => {
  const url = useMemo(() => {
    return `https://help.adjust.com${hit.url}`;
  }, [hit]);

  return (
    <div className="max-w-[956px]">
      {/* <div class="flex gap-x-5">
        <PageBreadcrumbs breadcrumbs={breadcrumbs} withMargin={false} />
      </div> */}
      <a href={url} className="group flex flex-col">
        <h5 className="text-heading-5 font-semibold text-search-primary mt-3 mb-4 group-hover:text-link-active">
          {hit.title}
        </h5>
        <p className="text-heading-5" text-search-primary>
          {hit.content}
        </p>
      </a>
    </div>
  );
};

export default DevHubSearchResultCard;
