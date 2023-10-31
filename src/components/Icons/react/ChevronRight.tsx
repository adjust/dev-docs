import type { FC } from "react";

import type { IconProps } from "../types";

const ChevronRight: FC<IconProps> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.735 4.822L16.36 12l-6.626 7.178-1.47-1.356L13.64 12 8.265 6.178l1.47-1.356z"
        fill="currentColor"
      />
      <rect x={0.5} y={0.5} width={23} height={23} rx={2.5} stroke="#000" />
    </svg>
  );
};

export default ChevronRight;
