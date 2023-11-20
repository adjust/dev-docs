import algoliasearch from "algoliasearch";
import { Configure, InstantSearch } from "react-instantsearch";
import type { FC } from "react";

import DevHubHits from "./DevHubHits";

import type { HelpCenterIndexProps } from "./types";

const DevHubIndex: FC<HelpCenterIndexProps> = ({ algoliaKeys }) => {
  const searchClient = algoliasearch(algoliaKeys.appId, algoliaKeys.apiKey);

  return (
    <InstantSearch indexName="dev--nine" searchClient={searchClient}>
      <Configure query="" index="dev--nine" hitsPerPage={6} page={1} />
      <DevHubHits />
    </InstantSearch>
  );
};

export default DevHubIndex;
