import type { Locales } from "@i18n/locales";
import type { IWithLanguage } from "src/types/WithLanguage";

export interface FooterProps extends IWithLanguage {
  /** If true we display a contact support block  */
  withSupport?: boolean;
  narrow?: boolean;
  /** If true we do not display the language dropdown and we have another text in the Contact support block */
  contentLevel?: boolean;
}

export interface FooterMainProps extends IWithLanguage {
  /** If true we display a contact support block  */
  withSupport?: boolean;
  narrow?: boolean;
}

export interface LanguageSwitchProps {
  lang: string;
  locales: Locales;
  hideIcon?: boolean;
  isFooter?: boolean;
  currentUrl: string;
}
