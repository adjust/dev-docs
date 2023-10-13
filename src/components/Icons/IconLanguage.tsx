import type { FC } from "react";

import type { IconProps } from "./types";

const IconLanguage: FC<IconProps> = ({ width, height, color, ...props }) => {
  const widthValue = width ?? 22;
  const heightValue = height ?? 22;
  const colorValue = color ?? "#565C78";

  return (
    <svg
      width={widthValue}
      height={heightValue}
      viewBox={`0 0 ${widthValue} ${heightValue}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={10.781}
        cy={11}
        r={10}
        stroke={colorValue}
        strokeWidth={1.5}
      />
      <ellipse
        cx={10.781}
        cy={11}
        rx={4}
        ry={10}
        stroke={colorValue}
        strokeWidth={1.5}
      />
      <path
        stroke={colorValue}
        strokeWidth={1.5}
        d="M0.781006 8.25L20.781 8.25"
      />
      <path
        stroke={colorValue}
        strokeWidth={1.5}
        d="M0.781006 14.25L20.781 14.25"
      />
    </svg>
  );
};

export default IconLanguage;
