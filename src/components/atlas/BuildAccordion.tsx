/** @jsxImportSource react */
import { Accordion } from "@adjust/components";
import type { AccordionItem } from "@adjust/components/build/Accordion/Item";
import { htmlWithTitles } from "@components/utils/htmlWithTitles";
import type { FC } from "react";

// We only need one type of Accordion currently.
// This Accordion should contain a title, a body, and an optional badge

const BuildAccordion: FC<{
  content: string;
}> = (props) => {
  // The Atlas component passes the body content as a string of HTML.
  // We convert this to HTML using the `dangerouslySetInnerHTML` function.

  const content = htmlWithTitles(props.content);

  const data: AccordionItem[] = [
    {
      id: content.anchor,
      title: content.title || "",
      content: content.body,
      badge: {},
    },
  ];

  // Only add a badge if `props.badge` contains a value

  if (content.badge) {
    data[0].badge = { label: content.badge, color: "neutral" };
  }

  return (
    <div id={content.anchor}>
      <Accordion data={data} type="headline" />
    </div>
  );
};

export default BuildAccordion;
