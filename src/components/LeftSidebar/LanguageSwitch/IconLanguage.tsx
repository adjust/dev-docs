import type { FC } from "react";

const IconLanguage: FC<{ width?: number; height?: number; color?: string }> = ({
  width,
  height,
  color,
  ...props
}) => {
  const widthValue = width ?? 22;
  const heightValue = height ?? 22;

  return (
    <svg
      width={widthValue}
      height={heightValue}
      viewBox={`0 0 ${heightValue} ${widthValue}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke={color ?? "#565C78"} strokeWidth={1.5}>
        <circle cx={11.6001} cy={11.5332} r={10} />
        <ellipse cx={11.6001} cy={11.5332} rx={4} ry={10} />
        <path d="M1.6001 8.7832L21.6001 8.7832" />
        <path d="M1.6001 14.7832L21.6001 14.7832" />
      </g>
    </svg>
  );
};

export default IconLanguage;
