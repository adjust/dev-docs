/** @jsxImportSource react */
import { type FC, useEffect } from "react";
import { Tabs } from "@adjust/components";
import { useStore } from "@nanostores/react";

import { htmlWithTitles } from "@components/utils/htmlWithTitles";
import { $tabs, changeCurrentTab, updateTabs } from "@store/tabStore";

import type { TabItemType } from "@adjust/components/build/Tabs/TabItem";

const BuildTabs: FC<{
  content: string;
  items: TabItemType[];
}> = (props) => {
  const tabs = useStore($tabs);

  /* The Astro component passes the body content as a string of HTML.
  We use a helper function to convert this into usable HTML content*/
  const content = htmlWithTitles(props.content);

  useEffect(() => {
    updateTabs(props.items);
  }, []);

  return (
    <>
      <Tabs
        items={props.items}
        value={tabs.currentSync}
        onChange={changeCurrentTab}
      />
      {content.body}
    </>
  );
};

export default BuildTabs;
