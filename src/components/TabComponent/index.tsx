/** @jsxImportSource react */
import type { FC } from "react";

const TabComponent: FC<{
  content: string;
  icon: string;
  sync: string;
}> = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.content }} />;
};

export default TabComponent;
