import type { FC } from "react";

import ChevronLeft from "@components/Icons/react/ChevronLeft";

interface CollapsedTOCProps {
  setIsOpened: (value: boolean) => void;
}

const CollapsedTOC: FC<CollapsedTOCProps> = ({ setIsOpened }) => {
  return (
    <div className="xs:hidden lg:fixed top-0 bottom-0 md:right-0 xxl:left-0 mt-32 xxl:ml-[calc(100vw-42px-(100vw-100rem)/2)] items-start w-8 sm:hidden lg:flex z-10 border-[1px] border-t rounded-tl-lg border-bluish-grey">
      <button
        onClick={() => setIsOpened(true)}
        className="[&_svg]:hover:bg-[#0b58fe] [&_svg]:hover:text-white absolute rounded-md mt-8 -ml-4 bg-white z-50 w-6 h-6"
        aria-label="Toggle table of contents"
      >
        <ChevronLeft />
      </button>
    </div>
  );
};

export default CollapsedTOC;
