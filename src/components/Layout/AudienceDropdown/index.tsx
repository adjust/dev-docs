import { type FC, useRef, useState } from "react";
import classNames from "classnames";

import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { useWaitToTrigger } from "@hooks/useWaitToTrigger";
import { HELP_CENTER_LINK } from "src/consts";

import { useTranslations } from "@i18n/utils";
import { type Locales } from "@i18n/locales";

const AudienceDropdown: FC<{
  lang: string;
}> = (props) => {
  const t = useTranslations(props.lang as keyof Locales);
  const [isMenuShown, setIsMenuShown] = useState(false);
  const ref = useRef(null);
  const audiences = [
    {
      titleId: t("header.audience-picker-marketer"),
      slug: "marketer",
      link: `${HELP_CENTER_LINK}en/marketer`,
    },
    {
      titleId: t("header.audience-picker-partner"),
      slug: "partner",
      link: `${HELP_CENTER_LINK}en/partner`,
    },
  ];

  const hide = () => {
    setIsMenuShown(false);
  };

  useWaitToTrigger(hide, ref, 200, "outside");
  useOnClickOutside(ref, hide);

  const getAudienceColor = (audience: string) => {
    switch (audience) {
      case "partner":
        return { title: "#00C2A4", background: "#00C2A4" };
      case "marketer":
        return { title: "#0B58FE", background: "#85ACFF" };
      case "developer":
        return { title: "#A96AF9", background: "#CE9DF4" };

      default:
        return { title: "#C3CEE5", background: "#C3CEE5" };
    }
  };

  const color = getAudienceColor("developer");

  return (
    <div
      aria-label="audience picker wrapper"
      ref={ref}
      className="relative pl-2 py-[14px]"
      onClick={() => setIsMenuShown(true)}
      onMouseEnter={() => setIsMenuShown(true)}
    >
      <span
        aria-label={"audience picker current audience is for Developers"}
        style={{ borderBottom: `2px solid ${color.title}` }}
        className="cursor-pointer mb-3 text-sm font-medium"
      >
        {t("header.audience-picker-developer")}
      </span>
      <div
        aria-label="audience picker wrapper"
        className={classNames(
          "absolute flex-col top-[45px] gap-y-[2px] cursor-pointer hover:flex w-max",
          {
            flex: isMenuShown,
            hidden: !isMenuShown,
          },
        )}
      >
        {audiences.map((audience) => (
          <a
            key={audience.slug}
            aria-label={`audience picker item ${audience.slug}`}
            href={audience.link}
            style={{
              backgroundColor: getAudienceColor(audience.slug).background,
              color: "#000000",
            }}
            className={
              "cursor-pointer min-w-[85px] w-full pr-2 pl-6 text-sm h-6 flex items-center hover:!no-underline active:!no-underline focus:!no-underline " +
              (audience.slug == "marketer"
                ? "hover:!bg-[#769ff6] active:!bg-[#e0eaff]"
                : "") +
              (audience.slug == "partner"
                ? "hover:!bg-[#01b89c] active:!bg-[#d9ffef]"
                : "")
            }
          >
            {audience.titleId}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AudienceDropdown;
