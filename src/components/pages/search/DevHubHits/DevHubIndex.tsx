import { Configure, InstantSearch } from "react-instantsearch";
import { useEffect, useState, type FC } from "react";

import {
  getDevHubFilters,
  getSearchParams,
  getTypesenseClient,
} from "../utils";
import DevHubHits from "./DevHubHits";
import Pagination from "../Pagination";

import type { DevHubIndexProps } from "./types";

const DevHubIndex: FC<DevHubIndexProps> = ({ typesenseKeys, lang }) => {
  const { query, page } = getSearchParams();
  const [searchState, setSearchState] = useState({ query, page });

  const typesenseClient = getTypesenseClient(typesenseKeys, lang);

  useEffect(() => {
    const handleSearchChange = () => {
      const { query, page } = getSearchParams();
      setSearchState({ query, page });
    };

    // Listen for changes in the URL
    window.addEventListener("popstate", handleSearchChange);
    // Initial load
    handleSearchChange();

    return () => {
      window.removeEventListener("popstate", handleSearchChange);
    };
  }, []);

  return (
    <InstantSearch
      indexName={typesenseKeys.indexName}
      searchClient={typesenseClient}
      future={{ preserveSharedStateOnUnmount: false }}
    >
      <Configure
        query={searchState.query}
        filters={getDevHubFilters(lang)}
        index={typesenseKeys.indexName}
        hitsPerPage={6}
        // Typesense logic
        page={searchState.page - 1}
      />
      <DevHubHits lang={lang} />
      <Pagination canRefine lang={lang} />
    </InstantSearch>
  );
};

export default DevHubIndex;
