import { defaultLang, type Locales } from "./locales";
import { ui } from "./ui";

export const langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})(\/|$)/;
export const langParamRegex = /(^|\/)([a-z]{2}-?[A-Z]{0,2})(\/|$)/;

export const getLanguageFromURL = (pathname: string) => {
  const langCodeMatch = pathname.match(langPathRegex);
  const langCode = langCodeMatch ? langCodeMatch[1] : "en";
  return langCode as keyof Locales;
};

export const useTranslations = (lang: keyof typeof ui) => {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
};
