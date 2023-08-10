/** @jsxImportSource react */
import { IconName, Tile } from "@adjust/components";
import type { FC } from "react";

const BuildTile: FC<{
  content: string;
  icon?: IconName;
  title?: string;
}> = (props) => {
  // The Atlas component passes the body content as a string of HTML.
  // We convert this to HTML using the `dangerouslySetInnerHTML` function.

  const content = <div dangerouslySetInnerHTML={{ __html: props.content }} />;

  return (
    <Tile title={props.title} iconName={props.icon}>
      {content}
    </Tile>
  );
};

export default BuildTile;
