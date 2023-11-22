import type { Hit } from "@algolia/client-search";

import type { AlgoliaKeys } from "../types";
import type { Locales } from "@i18n/locales";

export interface DevHubIndexProps {
  algoliaKeys: AlgoliaKeys;
  lang: keyof Locales;
}

export interface DevHubSearchResultCardProps {
  hit: Hit<any>;
  className: string;
}

export interface HitBreadcrumb {
  url: string;
  title: string;
}
