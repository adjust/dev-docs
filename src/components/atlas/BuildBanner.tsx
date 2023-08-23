/** @jsxImportSource react */
import type { FC } from "react";
import { htmlWithTitles } from "@components/utils/htmlWithTitles";
import { Banner } from "@adjust/components";

const BuildBanner: FC<{
  description: string;
  typeTitle: string;
  kind: BannerKind;
}> = (props) => {
  /* The Astro component passes the body content as a string of HTML.
  We use a helper function to convert this into usable HTML content*/

  let content = htmlWithTitles(props.description);

  return (
    <Banner
      title={content.title ? content.title : props.typeTitle}
      kind={props.kind}
      description={content.body}
    />
  );
};

export default BuildBanner;
