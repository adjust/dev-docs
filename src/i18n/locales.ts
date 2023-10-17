export type Locales = Record<
  "en" | "zh" | "ja" | "ko" | "ru" | "fr" | "es" | "tr" | "vi" | "pt",
  string
>;

export const LOCALE_NAMES: Locales = {
  en: "English",
  es: "Español",
  fr: "Français",
  vi: "Tiếng Việt",
  tr: "Türkçe",
  ru: "Русский",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  pt: "Português",
};

export const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//;

export const KNOWN_LANGUAGE_CODES = Object.keys(LOCALE_NAMES);

export const getLanguageFromURL = (pathname: string) => {
  const langCodeMatch = pathname.match(langPathRegex);
  const langCode = langCodeMatch ? langCodeMatch[1] : "en";
  return langCode as (typeof KNOWN_LANGUAGE_CODES)[number];
};
