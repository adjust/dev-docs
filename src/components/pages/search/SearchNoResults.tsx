import type { FC } from "react";

import { HELP_CENTER_LINK } from "src/consts";
import { getSearchParams } from "./utils";
import type { Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";

const SearchNoResults: FC<{ bodyText: string; lang: string }> = ({
  bodyText,
  lang,
}) => {
  const t = useTranslations(lang as keyof Locales);
  const { query } = getSearchParams();
  const helpCenterParams = `query=${query}&page=1&limit=15`;

  return (
    <div className="flex flex-col items-center w-full xs:pl-4 lg:pl-0  bg-[#F4F7FD] my-6">
      <div className="pt-4">
        <img src="/images/search/no-results-search.svg" />
      </div>
      <div className="text-[32px] text-primary pb-2">
        {t("search.no-results")}
      </div>
      <div className="text-secondary mb-4">{bodyText}</div>
      <a
        href={`${HELP_CENTER_LINK}en/search?${helpCenterParams}`}
        className="flex items-center  p-4 h-10 w-fit rounded-md font-semibold bg-white hover:bg-slate-200 mb-4  "
      >
        {t("search.open-help-center")}
      </a>
    </div>
  );
};

export default SearchNoResults;
