import { FC, useMemo } from "react";
import { Highlight } from "react-instantsearch";

import type { HelpCenterResultCardProps } from "./types";

const HelpCenterResultCard: FC<HelpCenterResultCardProps> = ({
  hit,
  className,
}) => {
  const url = useMemo(() => {
    return `https://help.adjust.com${hit.url}`;
  }, [hit]);

  return (
    <div className={className}>
      <a className="block" href={url} target="_blank" rel="noreferrer">
        <div className="bg-white h-32 p-4 border rounded-lg overflow-hidden group  hover:shadow">
          <div
            className="font-medium truncate mb-2 leading-5 text-primary group-hover:text-link-active"
            title={hit.title}
          >
            {hit.title}
          </div>
          {hit.imageUrl ? (
            <div className="flex justify-center items-center h-16">
              <img className="object-scale-down h-16" src={hit.imageUrl} />
            </div>
          ) : (
            <div
              className="text-base-sm text-primary font-light overflow-hidden"
              style={{
                height: "4.2rem",
              }}
            >
              <Highlight hit={hit} attribute="content" />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default HelpCenterResultCard;
