import type { Hit } from "@algolia/client-search";

import type { AlgoliaKeys } from "../types";

export interface DevHubIndexProps {
  algoliaKeys: AlgoliaKeys;
}

export interface DevHubSearchResultCardProps {
  hit: Hit<any>;
  className: string;
}
