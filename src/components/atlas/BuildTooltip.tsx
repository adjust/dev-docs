import { type Position, Tooltip } from "@adjust/components";
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
        zIndex={100}
        content={<div style={{ maxWidth: "fit-content" }}>{props.content}</div>}
      >
        <span className="underline decoration-dashed">{props.children}</span>
      </Tooltip>
    </>
  );
};

export default BuildTooltip;
