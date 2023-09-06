/** @jsxImportSource react */
import { type FC, useEffect, useState } from "react";
import { Tabs } from "@adjust/components";
import { useStore } from "@nanostores/react";

import { $tabs, changeSyncValue, updateTabItems } from "@store/tabStore";

import type { TabItemType } from "@adjust/components/build/Tabs/TabItem";

export interface TabItem extends TabItemType {
  sync: string;
}

const BuildTabs: FC<{
  content: JSX.Element;
  items: TabItem[];
}> = ({ content, items }) => {
  const tabs = useStore($tabs);
  const isTabsHaveSync = items.every((tab) => tab.sync !== "undefined");
  const [currentTabs, setCurrentTabs] = useState({
    items: items,
    activeTab: items[0].id,
    isTabsHaveSync: isTabsHaveSync,
  });

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
    if (currentTabs.isTabsHaveSync && tabs.currentSync) {
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

  useEffect(() => {
    updateTabItems(items);
  }, []);

  return (
    <>
      <Tabs
        items={currentTabs.items}
        value={currentTabs.activeTab}
        onChange={(id) => handleTabChange(id, currentTabs.isTabsHaveSync)}
      />
      {content}
    </>
  );
};

export default BuildTabs;
