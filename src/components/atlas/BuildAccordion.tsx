import { Accordion } from "@adjust/components";
import type { FC, ReactNode } from "react";
import type { AccordionItem } from "@adjust/components/build/Accordion/Item";

const BuildAccordion: FC<{
  data: AccordionItem[];
  content?: ReactNode;
}> = ({ data, content }) => {
  // Clone the data array to ensure immutability
  const accordionData = [...data];

  // Update the first item with the provided content
  if (content !== undefined) {
    accordionData[0] = {
      ...accordionData[0],
      content: content,
    };
  }

  return (
    <div id={accordionData[0].id.toString()}>
      <Accordion data={accordionData} type="headline" />
    </div>
  );
};

export default BuildAccordion;
