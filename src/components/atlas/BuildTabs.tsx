/** @jsxImportSource react */
import { type FC, useEffect, useState } from "react";
import { Tabs } from "@adjust/components";
import { useStore } from "@nanostores/react";

import { htmlWithTitles } from "@components/utils/htmlWithTitles";
import { $tabs, changeSyncValue } from "@store/tabStore";

import type { TabItemType } from "@adjust/components/build/Tabs/TabItem";

export interface TabItem extends TabItemType {
  sync: string;
}

const BuildTabs: FC<{
  content: string;
  items: TabItem[];
}> = ({ content, items }) => {
  const tabs = useStore($tabs);
  const isTabsHaveSync = items.every((tab) => tab.sync !== "undefined");
  const [currentTabs, setCurrentTabs] = useState({
    items: items,
    activeTab: items[0].id,
    isTabsHaveSync: isTabsHaveSync,
  });

  /* The Astro component passes the body content as a string of HTML.
  We use a helper function to convert this into usable HTML content*/
  const contentParsed = htmlWithTitles(content);

  const handleTabChange = (tabId: string, withSync = true) => {
    // hiding inactive tabs from the current list
    currentTabs.items.forEach((tab) => {
      if (tab.id !== tabId) {
        const currentTab = document.getElementById(tab.id)!;
        currentTab.className = "hidden";
      }
    });

    // making the current tab visible
    const currentTab = document.getElementById(tabId)!;
    currentTab.className = "block";

    // if current list has sync values we need to update store with the latest sync value
    if (withSync) {
      const syncValue = items.find((tab) => tab.id === tabId)?.sync!;
      changeSyncValue(syncValue);
    }

    setCurrentTabs((prev) => ({ ...prev, activeTab: tabId }));
  };

  useEffect(() => {
    if (
      currentTabs.isTabsHaveSync &&
      tabs.currentSync
    ) {
      const activeTabId = currentTabs.items.find(
        (tab) => tab.sync === tabs.currentSync
      )?.id;

      if (activeTabId) {
        handleTabChange(activeTabId);
      }
    } else {
      handleTabChange(currentTabs.activeTab, false);
    }
  }, [tabs.currentSync]);

  return (
    <>
      <Tabs
        items={currentTabs.items}
        value={currentTabs.activeTab}
        onChange={(id) => handleTabChange(id, currentTabs.isTabsHaveSync)}
      />
      {contentParsed.body}
    </>
  );
};

export default BuildTabs;
