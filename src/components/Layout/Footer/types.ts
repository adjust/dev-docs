import type { Locales } from "@i18n/locales";

export interface LanguageSwitchProps {
  lang: string;
  locales: Locales;
  hideIcon?: boolean;
  isFooter?: boolean;
  currentUrl: string;
}
