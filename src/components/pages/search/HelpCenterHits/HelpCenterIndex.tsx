import { Configure, InstantSearch } from "react-instantsearch";
import { useEffect, useState, type FC } from "react";
import algoliasearch from "algoliasearch";

import { getSearchParams } from "../utils";
import HelpCenterHits from "./HelpCenterHits";

import type { HelpCenterIndexProps } from "./types";

const HelpCenterIndex: FC<HelpCenterIndexProps> = ({ algoliaKeys, lang }) => {
  const { query } = getSearchParams();
  const [searchState, setSearchState] = useState({ query });

  const searchClient = algoliasearch(algoliaKeys.appId, algoliaKeys.apiKey);

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
      indexName={algoliaKeys.indexName}
      searchClient={searchClient}
      future={{ preserveSharedStateOnUnmount: false }}
    >
      <Configure
        query={searchState.query}
        filters={`locale:${lang}`}
        index={algoliaKeys.indexName}
        hitsPerPage={6}
        page={1}
      />
      <HelpCenterHits lang={lang} />
    </InstantSearch>
  );
};

export default HelpCenterIndex;
