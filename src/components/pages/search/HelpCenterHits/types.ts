import type { AlgoliaKeys, Hit } from "./../types";
import type { Locales } from "@i18n/locales";

export interface HelpCenterIndexProps {
  algoliaKeys: AlgoliaKeys;
  lang: keyof Locales;
}

export interface HelpCenterResultCardProps {
  hit: Hit<any>;
  className: string;
}
