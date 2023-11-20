import type { Hit } from "@algolia/client-search";

import type { AlgoliaKeys } from "../types";

export interface HelpCenterIndexProps {
  algoliaKeys: AlgoliaKeys;
}

export interface HelpCenterResultCardProps {
  hit: Hit<any>;
  className: string;
}
