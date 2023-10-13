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
