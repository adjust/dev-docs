import { Position, Tooltip } from "@adjust/components";
import type { FC, ReactNode, ReactElement } from "react";

const BuildTooltip: FC<{
  content: ReactNode;
  children: ReactElement;
  position?: Position;
}> = (props) => {
  return (
    <>
      <Tooltip
        position={props.position ? props.position : "top"}
        content={props.content}
        zIndex={100}
      >
        <span className="underline decoration-dashed">{props.children}</span>
      </Tooltip>
    </>
  );
};

export default BuildTooltip;
