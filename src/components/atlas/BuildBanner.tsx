/** @jsxImportSource react */
import type { FC } from "react";
import { Banner } from "@adjust/components";

const BuildBanner: FC<{
  description: string;
  title: string;
  kind: BannerKind;
}> = (props) => {
  // The Atlas component passes the body content as a string of HTML.
  // We convert this to HTML using the `dangerouslySetInnerHTML` function.

  const description = (
    <div dangerouslySetInnerHTML={{ __html: props.description }} />
  );

  return (
    <Banner title={props.title} kind={props.kind} description={description} />
  );
};

export default BuildBanner;
