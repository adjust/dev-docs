import { Configure, InstantSearch } from "react-instantsearch";
import { useEffect, useState, type FC } from "react";

import { getSearchParams, getTypesenseClient } from "../utils";
import HelpCenterHits from "./HelpCenterHits";

import type { HelpCenterIndexProps } from "./types";

const HelpCenterIndex: FC<HelpCenterIndexProps> = ({ typesenseKeys, lang }) => {
  const { query } = getSearchParams();
  const [searchState, setSearchState] = useState({ query });

  const typesenseClient = getTypesenseClient(typesenseKeys, lang);

  useEffect(() => {
    const handleSearchChange = () => {
      const { query } = getSearchParams();
      setSearchState({ query });
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
        filters={`locale:${lang}`}
        index={typesenseKeys.indexName}
        hitsPerPage={6}
        page={0}
      />
      <HelpCenterHits lang={lang} />
    </InstantSearch>
  );
};

export default HelpCenterIndex;
