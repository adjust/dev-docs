/** @jsxImportSource react */
import { Accordion } from "@adjust/components";
import type { FC, ReactNode } from "react";
import type { AccordionItem } from "@adjust/components/build/Accordion/Item";

const BuildAccordion: FC<{
  data: AccordionItem[];
  content?: ReactNode;
}> = (props) => {
  let AccordionData = props.data;

  AccordionData[0].content = props.content;

  return (
    <>
      <Accordion data={AccordionData} type="headline" />
    </>
  );
};

export default BuildAccordion;
