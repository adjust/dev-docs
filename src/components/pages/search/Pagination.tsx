import type { FC } from "react";
import classNames from "classnames";
import { useHits } from "react-instantsearch";
import { Icon } from "@adjust/components";

interface PaginationProps {
  canRefine: boolean;
  refine: (page: number) => void;
  currentRefinement: number;
  lang?: string;
}

export const DEFAULT_HITS_PER_PAGE = 6;

const Pagination: FC<PaginationProps> = ({ canRefine, refine }) => {
  const { results } = useHits();

  const onPageChange = (page: number) => {
    return canRefine && refine(page);
  };

  const currentPage = results!.page;
  const isPaginaton = results!.nbHits > DEFAULT_HITS_PER_PAGE;

  const totalPages = results!.nbPages;

  const isFirstPage = currentPage === 1;
  const iconLeftColor = isFirstPage ? "#808080" : "#000";
  const isLastPage = currentPage === totalPages;
  const iconRightColor = isLastPage ? "#808080" : "#000";

  return (
    <>
      {isPaginaton && (
        <div className="flex justify-center items-center">
          <span
            className={classNames(
              "mr-3  flex items-center justify-center min-h-[20px] min-w-[20px]",
              {
                "hover:bg-[#fff] cursor-default": isFirstPage,
                "hover:bg-[#eceef4] cursor-pointer": !isFirstPage,
              }
            )}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <Icon name="ChevronLeft" size="small" color={iconLeftColor} />
          </span>
          <span className="text-base-sm font-medium flex items-center h-full">
            Page {currentPage} of {totalPages}
          </span>
          <span
            className={classNames(
              "ml-3 flex items-center justify-center min-h-[20px] min-w-[20px]",
              {
                "hover:bg-[#fff] cursor-default": isLastPage,
                "hover:bg-[#eceef4] cursor-pointer": !isLastPage,
              }
            )}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <Icon name="ChevronRight" size="small" color={iconRightColor} />
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;
