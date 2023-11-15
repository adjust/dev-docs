import { FC, useMemo } from "react";
import classNames from "classnames";
import { Icon } from "@adjust/components";

interface PaginationProps {
  canRefine: boolean;
  refine: (page: number) => void;
  nbHits: number;
  currentRefinement: number;
  lang?: string;
}

export const DEFAULT_HITS_PER_PAGE = 6;

const Pagination: FC<PaginationProps> = ({
  canRefine,
  refine,
  nbHits,
  currentRefinement,
}) => {
  const onPageChange = (page: number) => {
    return canRefine && refine(page);
  };

  const isPaginaton = nbHits > DEFAULT_HITS_PER_PAGE;

  const totalPages = useMemo(
    () => Math.trunc(nbHits / DEFAULT_HITS_PER_PAGE),
    [nbHits]
  );

  const isFirstPage = currentRefinement === 1;
  const iconLeftColor = isFirstPage ? "#808080" : "#000";
  const isLastPage = currentRefinement === totalPages;
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
            onClick={() => onPageChange(currentRefinement - 1)}
          >
            <Icon name="ChevronLeft" size="small" color={iconLeftColor} />
          </span>
          <span className="text-base-sm font-medium flex items-center h-full">
            Page {currentRefinement} of {totalPages}
          </span>
          <span
            className={classNames(
              "ml-3 flex items-center justify-center min-h-[20px] min-w-[20px]",
              {
                "hover:bg-[#fff] cursor-default": isLastPage,
                "hover:bg-[#eceef4] cursor-pointer": !isLastPage,
              }
            )}
            onClick={() => onPageChange(currentRefinement + 1)}
          >
            <Icon name="ChevronRight" size="small" color={iconRightColor} />
          </span>
        </div>
      )}
    </>
  );
};

export default Pagination;
