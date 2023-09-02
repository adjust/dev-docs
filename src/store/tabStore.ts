import { map } from "nanostores";

interface TabStore {
  currentSync: string;
}

export const $tabs = map<TabStore>({
  currentSync: "",
});

export const changeSyncValue = (sync: string) => {
  $tabs.set({ currentSync: sync });
};
