import { map } from "nanostores";

import type { TabItemType } from "@adjust/components/build/Tabs/TabItem";

interface TabStore {
  items: TabItemType[];
  currentSync: string;
}

export const $tabs = map<TabStore>({
  items: [],
  currentSync: "",
});

export const updateTabs = (items: TabStore["items"]) => {
  $tabs.set({
    items: [...$tabs.get().items, ...items],
    currentSync: items[0].id,
  });
};

export const changeCurrentTab = (newTab: string) => {
  $tabs.set({ ...$tabs.get(), currentSync: newTab });
};
