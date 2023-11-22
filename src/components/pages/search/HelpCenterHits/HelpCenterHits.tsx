import type { FC } from "react";
import { useHits } from "react-instantsearch";

import HelpCenterResultCard from "./HelpCenterResultCard";
import SearchNoResults from "../SearchNoResults";

const HelpCenterHits: FC = () => {
  const { hits } = useHits();

  return (
    <div className="w-full bg-[#F4F7FD]">
      <div className="gap-x-[77px] gap-y-[43px] justify-center flex flex-wrap -mx-2">
        {hits.map((hit) => (
          <HelpCenterResultCard
            className="xs:w-full md:w-[calc(33%-48px)] px-2 py-2"
            key={hit.objectID}
            hit={hit}
          />
        ))}
      </div>
      {!hits.length && (
        <SearchNoResults bodyText="Sorry but there’s nothing on the Adjust Help Center matching your query" />
      )}
    </div>
  );
};

export default HelpCenterHits;
