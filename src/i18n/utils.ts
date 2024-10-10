import { defaultLang } from "./locales";
import { ui } from "./ui";

export const useTranslations = (lang: keyof typeof ui) => {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
};
