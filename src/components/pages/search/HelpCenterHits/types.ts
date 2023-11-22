import type { Locales } from "@i18n/locales";
import type { Hit } from "@algolia/client-search";

import type { AlgoliaKeys } from "../types";

export interface HelpCenterIndexProps {
  algoliaKeys: AlgoliaKeys;
  lang: keyof Locales;
}

export interface HelpCenterResultCardProps {
  hit: Hit<any>;
  className: string;
}
