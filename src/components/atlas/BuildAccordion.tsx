/** @jsxImportSource react */
import { Accordion } from "@adjust/components";
import type { FC } from "react";

// We only need one type of Accordion currently.
// This Accordion should contain a title, a body, and an optional badge

const BuildAccordion: FC<{
  content: string;
  title: string;
  badge?: string;
}> = (props) => {
  // The Atlas component passes the body content as a string of HTML.
  // We convert this to HTML using the `dangerouslySetInnerHTML` function.

  const content = <div dangerouslySetInnerHTML={{ __html: props.content }} />;

  // Each accordion exists in its own list, so we can hardcode the value of `id` to 1.
  // If we want to create multi-accordion lists in future we will need to iterate the `id`.

  const data = [
    {
      id: 1,
      title: props.title,
      content: content,
      badge: {},
    },
  ];

  // Only add a badge if `props.badge` contains a value

  if (props.badge) {
    data[0].badge = { label: props.badge, color: "neutral" };
  }

  return <Accordion data={data} type="headline" />;
};

export default BuildAccordion;
