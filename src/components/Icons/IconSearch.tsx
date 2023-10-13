import type { FC } from "react";

import type { IconProps } from "./types";

const IconSearch: FC<IconProps> = ({ width, height, color, ...props }) => {
  const widthValue = width ?? 19;
  const heightValue = height ?? 19;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widthValue}
      height={heightValue}
      viewBox={`0 0 ${widthValue} ${heightValue}`}
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.206.5a7.206 7.206 0 104.108 13.127l4.506 4.507c.483.483 1.259.49 1.738.01l.085-.084a1.223 1.223 0 00-.011-1.738l-4.506-4.507A7.206 7.206 0 007.206.5zM1.8 7.7a5.4 5.4 0 1010.8 0 5.4 5.4 0 00-10.8 0z"
        fill={color ?? "#6E7492"}
      />
    </svg>
  );
};

export default IconSearch;
