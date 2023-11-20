import algoliasearch from "algoliasearch";
import { Configure, InstantSearch } from "react-instantsearch";
import type { FC } from "react";

import DevHubHits from "./DevHubHits";

import type { DevHubIndexProps } from "./types";

const DevHubIndex: FC<DevHubIndexProps> = ({ algoliaKeys }) => {
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
      <DevHubHits />
    </InstantSearch>
  );
};

export default DevHubIndex;
