import type { Locales } from "@i18n/locales";
import type { IWithLanguage } from "src/types/WithLanguage";

export interface LanguageSwitchProps {
  lang: string;
  locales: Locales;
  hideIcon?: boolean;
  isFooter?: boolean;
  currentUrl: string;
}
