import algoliasearch from "algoliasearch";
import { Configure, InstantSearch } from "react-instantsearch";
import type { FC } from "react";

import HelpCenterHits from "./HelpCenterHits";

import type { HelpCenterIndexProps } from "./types";

const HelpCenterIndex: FC<HelpCenterIndexProps> = ({ algoliaKeys }) => {
  const searchClient = algoliasearch(algoliaKeys.appId, algoliaKeys.apiKey);

  return (
    <InstantSearch indexName="prod_THC" searchClient={searchClient}>
      <Configure query="" index="prod_THC" hitsPerPage={6} page={1} />
      <HelpCenterHits />
    </InstantSearch>
  );
};

export default HelpCenterIndex;
