/** @jsxImportSource react */
import { Banner } from "@adjust/components";

export default function BuildBanner(props) {
  // The Atlas component passes the body content as a string of HTML.
  // We convert this to HTML using the `dangerouslySetInnerHTML` function.

  const description = (
    <div dangerouslySetInnerHTML={{ __html: props.description }} />
  );

  return (
    <Banner title={props.title} kind={props.kind} description={description} />
  );
}
