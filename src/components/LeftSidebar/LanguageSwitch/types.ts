import type { Locales } from "@i18n/locales";

export interface LanguageSwitchProps {
  lang: string;
  onChange: (locale: string) => void;
  locales: Locales;
  hideIcon?: boolean;
  isFooter?: boolean;
}
