import { map } from "nanostores";

import type { TabItem } from "@components/atlas/BuildTabs";

interface TabStore {
  items: TabItem[];
  currentSync: string;
}

export const $tabs = map<TabStore>({
  items: [],
  currentSync: "",
});

export const changeSyncValue = (sync: string) => {
  $tabs.set({ ...$tabs.get(), currentSync: sync });
};

export const updateTabItems = (newItems: TabItem[]) => {
  const tabsData = $tabs.get();
  $tabs.set({ ...tabsData, items: [...tabsData.items, ...newItems] });
};
