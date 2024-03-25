import classNames from "classnames";
import { type FC, useRef, useState } from "react";

import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { useWaitToTrigger } from "@hooks/useWaitToTrigger";
import IconLanguage from "@components/Icons/react/IconLanguage";

import type { LanguageSwitchProps } from "./types";
import type { Locales } from "@i18n/locales";

const LanguageSwitch: FC<LanguageSwitchProps> = ({
  lang,
  locales,
  hideIcon = false,
  isFooter,
  currentUrl,
}) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const ref = useRef(null);

  const hide = () => {
    setIsMenuShown(false);
  };

  useWaitToTrigger(hide, ref, 300, "outside");
  useOnClickOutside(ref, hide);

  const getLanguageUrl = (newLang: string) => {
    return currentUrl.replace(lang, newLang);
  };

  return (
    <div
      className="flex min-h-[28px] items-center min-w-[90px] text-start relative z-[35] w-full"
      style={isFooter ? { paddingRight: "32px", textAlign: "center" } : {}}
      ref={ref}
    >
      <label htmlFor="current-lang" className="hidden">
        {`Chosen language in the language dropdown is ${
          locales[lang as keyof Locales]
        }`}
      </label>
      <div
        id="current-lang"
        className="pl-[10px] text-base cursor-pointer flex items-center w-full mr-[7px]"
        tabIndex={0}
        onClick={() => setIsMenuShown(true)}
        onMouseOver={() => setIsMenuShown(true)}
      >
        <div className="mr-[7px]">
          {!hideIcon && <IconLanguage width={22} height={22} />}
        </div>
        <div
          className={classNames("w-full text-sm", {
            "text-secondary": !isFooter,
            "text-black": isFooter,
          })}
        >
          {locales[lang as keyof Locales] || "English"}
        </div>
      </div>
      <div
        className={classNames(
          "bg-white absolute -right-[15px] -top-[170px] left-5 leading-5 w-[7.25rem] border border-solid border-[#f3f4f6] rounded-sm shadow-[0_0_15px_0_#1e3c9622] p-4 text-base z-50 after:-z-10 after:absolute after:-bottom-[6px] after:w-5 after:h-5 after:content-[''] after:bg-white after:border-t-0 after:-mt-[10px] after:shadow-[3px_3px_-5px_-1px_#1e3c9611] after:rotate-45 hover:block",
          isMenuShown ? "block" : "hidden",
          isFooter ? "bg-white -right-[15px] -top-[190px] -left-[2px] leading-5 w-[7.25rem] border border-solid border-[#f4f5f6] rounded-sm shadow-[0_0_15px_0_#1e3c9622" : "",
          isFooter ? "after:-z-10 after:content-[''] after:absolute after:-bottom-[6px] after:w-5 after:h-5 after:bg-white after:border-t-0 -ml-[15px] after:-mt-[10px] after:shadow-[3px_3px_-5px_-1px_#1e3c9611] after:rotate-45" : ""
        )}
      >
        <ul>
          {Object.keys(locales).map((locale) => (
            <li key={locale} className="text-sm pt-[5px] pb-[5px] text-left">
              <a
                href={getLanguageUrl(locale)}
                className="hover:no-underline hover:text-left hover:cursor-pointer hover:text-[#1a62ff]"
              >
                {locales[locale as keyof Locales]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitch;
