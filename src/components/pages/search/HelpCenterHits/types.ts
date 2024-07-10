import type { Hit, TypesenseKeys } from "./../types";
import type { Locales } from "@i18n/locales";

export interface HelpCenterIndexProps {
  typesenseKeys: TypesenseKeys;
  lang: keyof Locales;
}

export interface HelpCenterResultCardProps {
  hit: Hit<any>;
  className: string;
}
