import algoliasearch from "algoliasearch";
import { Configure, InstantSearch } from "react-instantsearch";
import type { FC } from "react";

import HelpCenterHits from "./HelpCenterHits";

import type { HelpCenterIndexProps } from "./types";

const HelpCenterIndex: FC<HelpCenterIndexProps> = ({ algoliaKeys }) => {
  const searchClient = algoliasearch(algoliaKeys.appId, algoliaKeys.apiKey);

  return (
    <InstantSearch
      indexName={algoliaKeys.indexName}
      searchClient={searchClient}
    >
      <Configure
        query=""
        index={algoliaKeys.indexName}
        hitsPerPage={6}
        page={1}
      />
      <HelpCenterHits />
    </InstantSearch>
  );
};

export default HelpCenterIndex;
