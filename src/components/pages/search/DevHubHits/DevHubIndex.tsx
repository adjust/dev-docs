import algoliasearch from "algoliasearch";
import { Configure, InstantSearch } from "react-instantsearch";
import type { FC } from "react";

import { getDevHubFilters, getSearchParams } from "../utils";
import DevHubHits from "./DevHubHits";
import Pagination from "../Pagination";

import type { DevHubIndexProps } from "./types";

const DevHubIndex: FC<DevHubIndexProps> = ({ algoliaKeys, lang }) => {
  const { query, page } = getSearchParams();
  const searchClient = algoliasearch(algoliaKeys.appId, algoliaKeys.apiKey);

  return (
    <InstantSearch
      indexName={algoliaKeys.indexName}
      searchClient={searchClient}
    >
      <Configure
        query={query}
        filters={getDevHubFilters(lang)}
        index={algoliaKeys.indexName}
        hitsPerPage={6}
        page={page}
      />
      <DevHubHits />
      <div className="mb-16">
        <Pagination canRefine currentRefinement={1} />
      </div>
    </InstantSearch>
  );
};

export default DevHubIndex;
