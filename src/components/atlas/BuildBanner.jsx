/** @jsxImportSource react */
import { Banner } from "@adjust/components";

export default function BuildBanner(props) {
  const description = (
    <div dangerouslySetInnerHTML={{ __html: props.description }} />
  );

  return (
    <Banner title={props.title} kind={props.kind} description={description} />
  );
}
