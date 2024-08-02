import type { FC } from "react";
import { useHits } from "react-instantsearch";
import DevHubSearchResultCard from "./DevHubSearchResultCard";
import SearchNoResults from "../SearchNoResults";
import { useTranslations } from "@i18n/utils";
import type { Locales } from "@i18n/locales";

const DevHubHits: FC<{ lang: string }> = ({ lang }) => {
  const t = useTranslations(lang as keyof Locales);
  const { items } = useHits();

  return (
    <div className="w-full">
      <div className="gap-x-[77px] gap-y-[43px] justify-start flex flex-col -mx-2">
        {items?.map((hit) => (
          <DevHubSearchResultCard
            className="xs:w-full md:w-[calc(33%-48px)] px-2 py-2"
            key={hit.objectID}
            hit={hit}
          />
        ))}
      </div>
      {!items.length && (
        <SearchNoResults bodyText={t("search.no-match")} lang={lang} />
      )}
    </div>
  );
};

export default DevHubHits;
