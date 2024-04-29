import algoliasearch from "algoliasearch";
import { Configure, InstantSearch } from "react-instantsearch";
import type { FC } from "react";

import { getSearchParams } from "../utils";
import HelpCenterHits from "./HelpCenterHits";

import type { HelpCenterIndexProps } from "./types";

const HelpCenterIndex: FC<HelpCenterIndexProps> = ({ algoliaKeys, lang }) => {
  const { query } = getSearchParams();
  const searchClient = algoliasearch(algoliaKeys.appId, algoliaKeys.apiKey);

  return (
    <InstantSearch
      indexName={algoliaKeys.indexName}
      searchClient={searchClient}
      future={{ preserveSharedStateOnUnmount: false }}
    >
      <Configure
        query={query}
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
