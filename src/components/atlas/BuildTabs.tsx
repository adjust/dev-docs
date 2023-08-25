/** @jsxImportSource react */
import { useState, type FC } from "react";
import { htmlWithTitles } from "@components/utils/htmlWithTitles";
import { Tabs } from "@adjust/components";

const BuildTabs: FC<any> = (props) => {
  const [currentTab, setCurrentTab] = useState("1");
  /* The Astro component passes the body content as a string of HTML.
  We use a helper function to convert this into usable HTML content*/
  const content = htmlWithTitles(props.content);

  return (
    <>
      <Tabs items={props.items} value={currentTab} onChange={setCurrentTab} />
      {content.body}
    </>
  );
};

export default BuildTabs;
