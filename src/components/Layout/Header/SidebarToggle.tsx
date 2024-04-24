import classNames from "classnames";
import { type FC, useState, useEffect } from "react";
import { type Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";

const MenuToggle: FC<{ lang: string }> = ({ lang }) => {
  const t = useTranslations(lang as keyof Locales);
  const [sidebarShown, setSidebarShown] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body")!;
    if (sidebarShown) {
      body.classList.add("mobile-sidebar-toggle");
    } else {
      body.classList.remove("mobile-sidebar-toggle");
    }
  }, [sidebarShown]);

  return (
    <button
      type="button"
      className={classNames("xs:block lg:hidden top-0 mb-2 z-40 p-0", {
        "bg-secondary": sidebarShown,
        "bg-white": !sidebarShown,
      })}
      id="menu-toggle"
      onClick={() => setSidebarShown(!sidebarShown)}
      aria-label={t("sidebar.toggle-label")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        fill="none"
        viewBox="0 0 20 20"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <span className="sr-only">{t("sidebar.toggle-label")}</span>
    </button>
  );
};

export default MenuToggle;
