import type { FC } from "react";
import classNames from "classnames";
import { useHits } from "react-instantsearch";
import { Icon } from "@adjust/components";
import type { Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";

import { getSearchParams, setSearchParams } from "./utils";

interface PaginationProps {
  canRefine: boolean;
  lang: string;
}

export const DEFAULT_HITS_PER_PAGE = 6;

const Pagination: FC<PaginationProps> = ({ canRefine, lang }) => {
  const t = useTranslations(lang as keyof Locales);
  const { results } = useHits();

  const onPageChange = (page: number) => {
    return canRefine && setSearchParams({ pageValue: page, lang });
  };

  const { page } = getSearchParams();
  const isPaginaton = results!.nbHits > DEFAULT_HITS_PER_PAGE;

  const totalPages = results!.nbPages;

  const isFirstPage = page === 1;
  const iconLeftColor = isFirstPage ? "#808080" : "#000";
  const isLastPage = page === totalPages;
  const iconRightColor = isLastPage ? "#808080" : "#000";

  return (
    <>
      {isPaginaton && (
        <div className="flex justify-center items-center mb-16">
          <span
            className={classNames(
              "mr-3  flex items-center justify-center min-h-[20px] min-w-[20px]",
              {
                "hover:bg-[#fff] cursor-default": isFirstPage,
                "hover:bg-[#eceef4] cursor-pointer": !isFirstPage,
              },
            )}
            onClick={() => onPageChange(page - 1)}
          >
            <Icon name="ChevronLeft" size="small" color={iconLeftColor} />
          </span>
          <span className="text-base-sm font-medium flex items-center h-full">
            {t("pagination.position")
              .replace("${page}", page.toString())
              .replace("${totalPages}", totalPages.toString())}
          </span>
          <span
            className={classNames(
              "ml-3 flex items-center justify-center min-h-[20px] min-w-[20px]",
              {
                "hover:bg-[#fff] cursor-default": isLastPage,
                "hover:bg-[#eceef4] cursor-pointer": !isLastPage,
              },
            )}
            onClick={() => onPageChange(page + 1)}
          >
            <Icon name="ChevronRight" size="small" color={iconRightColor} />
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;
