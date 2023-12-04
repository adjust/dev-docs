import { type FC, useRef, useState } from "react";
import classNames from "classnames";

import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { useWaitToTrigger } from "@hooks/useWaitToTrigger";
import { HELP_CENTER_LINK } from "src/consts";

import "./audience.css";

const AudienceDropdown: FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const ref = useRef(null);
  const audiences = [
    {
      titleId: "for Marketers",
      slug: "marketer",
      link: `${HELP_CENTER_LINK}en/marketer`,
    },
    {
      titleId: "for Partners",
      slug: "partner",
      link: `${HELP_CENTER_LINK}en/partner`,
    },
    {
      titleId: "Classic dashboard",
      slug: "classic",
      link: `${HELP_CENTER_LINK}en/classic`,
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
        for Developers
      </span>
      <div
        aria-label="audience picker wrapper"
        className={classNames(
          "absolute flex-col top-[45px] gap-y-[2px] cursor-pointer hover:flex w-max",
          {
            flex: isMenuShown,
            hidden: !isMenuShown,
          }
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
            className={`header_audience item-${audience.slug} cursor-pointer min-w-[85px] w-full pr-2 pl-6 text-sm h-6 flex items-center`}
          >
            {audience.titleId}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AudienceDropdown;
