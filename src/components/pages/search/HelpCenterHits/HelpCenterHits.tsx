import type { FC } from "react";
import { useHits } from "react-instantsearch";
import { useTranslations } from "@i18n/utils";
import type { Locales } from "@i18n/locales";

import HelpCenterResultCard from "./HelpCenterResultCard";
import SearchNoResults from "../SearchNoResults";

const HelpCenterHits: FC<{ lang: string }> = ({ lang }) => {
  const t = useTranslations(lang as keyof Locales);
  const { items } = useHits();

  return (
    <div className="w-full bg-[#F4F7FD]">
      <div className="gap-x-[77px] gap-y-[43px] justify-center flex flex-wrap -mx-2">
        {items.map((hit) => (
          <HelpCenterResultCard
            className="xs:w-full md:w-[calc(33%-48px)] px-2 py-2"
            key={hit.objectID}
            hit={hit}
          />
        ))}
      </div>
      {!items.length && (
        <SearchNoResults
          lang={lang}
          bodyText={t("search.help-center-no-match")}
        />
      )}
    </div>
  );
};

export default HelpCenterHits;
