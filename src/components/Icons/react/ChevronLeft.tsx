import type { FC } from "react";

import type { IconProps } from "../types";

const ChevronLeft: FC<IconProps> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.265 19.178L7.64 12l6.626-7.178 1.47 1.356L10.36 12l5.374 5.822-1.47 1.356z"
        fill="#191D2F"
      />
      <rect
        x={23.5}
        y={23.5}
        width={23}
        height={23}
        rx={2.5}
        transform="rotate(-180 23.5 23.5)"
        stroke="#000"
      />
    </svg>
  );
};

export default ChevronLeft;
