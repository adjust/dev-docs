import classNames from "classnames";
import { FC, useRef, useState } from "react";

import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { useWaitToTrigger } from "@hooks/useWaitToTrigger";
import IconLanguage from "@components/Icons/react/IconLanguage";

import type { LanguageSwitchProps } from "./types";
import type { Locales } from "@i18n/locales";

import "./language-switch.css";

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
          "lang-tooltip absolute rounded-sm leading-relaxed p-4 text-base z-50",
          isMenuShown ? "block" : "hidden"
        )}
      >
        <ul>
          {Object.keys(locales).map((locale) => (
            <li key={locale} className="text-sm">
              <a href={getLanguageUrl(locale)} className="hover:no-underline">
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
