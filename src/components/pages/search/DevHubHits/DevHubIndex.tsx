import algoliasearch from "algoliasearch";
import { Configure, InstantSearch } from "react-instantsearch";
import type { FC } from "react";

import { getSearchParams } from "../utils";
import DevHubHits from "./DevHubHits";

import type { DevHubIndexProps } from "./types";
import Pagination from "../Pagination";

const DevHubIndex: FC<DevHubIndexProps> = ({ algoliaKeys }) => {
  const { query } = getSearchParams();
  const searchClient = algoliasearch(algoliaKeys.appId, algoliaKeys.apiKey);

  return (
    <InstantSearch
      indexName={algoliaKeys.indexName}
      searchClient={searchClient}
    >
      <Configure
        query={query}
        filters={``}
        index={algoliaKeys.indexName}
        hitsPerPage={6}
        page={1}
      />
      <DevHubHits />
      <div className="mb-16">
        <Pagination canRefine currentRefinement={1} />
      </div>
    </InstantSearch>
  );
};

export default DevHubIndex;
