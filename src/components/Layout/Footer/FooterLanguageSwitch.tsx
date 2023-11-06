import classNames from "classnames";
import { type FC, useState, useRef } from "react";

import IconLanguage from "@components/Icons/react/IconLanguage";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { useWaitToTrigger } from "@hooks/useWaitToTrigger";

import type { Locales } from "@i18n/locales";
import type { LanguageSwitchProps } from "./types";
import LanguageSwitch from "../LanguageSwitch";

const FooterLanguageSwitch: FC<LanguageSwitchProps> = ({
  lang,
  locales,
  hideIcon = false,
  isFooter,
  currentUrl,
}) => {
  const router = useRouter();
  const langContext = useContext(I18NContext);

  const handleLanguageChange = (lang: string) => {
    langContext.setLanguage(lang);
    Cookies.set("choosed-language", lang, {
      secure: false,
    });

    let newPath: string;
    if (router.pathname.startsWith("/preview")) {
      const re = /\/preview\/\w{2}/;
      newPath = router.asPath.replace(re, `/preview/${lang}`);
    } else {
      const re = /\/\w{2}/;
      newPath = router.asPath.replace(re, `/${lang}`);
    }
    router.push({ href: newPath, query: { ...router.query, lang } });
  };
  // temporary solution for the https://adjustcom.atlassian.net/browse/THC-637 task will be changed when we release Portugues language
  useEffect(() => {
    if (!LOCALE_NAMES[langContext.language]) {
      langContext.setLanguage("en");
    }
  }, [langContext.language]);

  return (
    <div className="footer_language-switch min-h-[36px] bg-white flex items-center rounded-3xl border-[1px] border-solid border-[#000] relative min-w-[107px] xs:mb-4 md:mb-0 hover:cursor-pointer">
      <LanguageSwitch
        onChange={handleLanguageChange}
        lang={langContext.language}
        locales={LOCALE_NAMES}
        hideIcon
        isFooter
      />
      <Icon
        name="ChevronDown"
        css={{ position: "absolute", right: "10px", top: "5px" }}
      />
    </div>
  );
};

export default FooterLanguageSwitch;
