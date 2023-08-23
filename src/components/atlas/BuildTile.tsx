/** @jsxImportSource react */
import type { FC } from "react";
import { htmlWithTitles } from "@components/utils/htmlWithTitles";
import { Tile } from "@adjust/components";
import type { IconName } from "@adjust/components";

const BuildBanner: FC<{
  content: string;
  icon?: IconName;
}> = (props) => {
  /* The Astro component passes the body content as a string of HTML.
  We use a helper function to convert this into usable HTML content*/

  const content = htmlWithTitles(props.content);

  return (
    <Tile
      title={content.title ? content.title : ""}
      iconName={props.icon}
      children={content.body}
    />
  );
};

export default BuildBanner;
