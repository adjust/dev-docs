import type { Hit } from "@algolia/client-search";

import type { TypesenseKeys } from "../types";
import type { Locales } from "@i18n/locales";

export interface DevHubIndexProps {
  typesenseKeys: TypesenseKeys;
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
