import { map } from "nanostores";
import { uniqBy } from "lodash-es";
import type { Option } from "@adjust/components/build/ComboBox/ComboBox";

export interface VersionStore {
  items: Option[] & {
    default?: boolean;
  };
  currentVersion: Option & {
    default?: boolean;
  };
}

export const $versions = map<VersionStore>({
  items: [],
  currentVersion: { label: "v1", value: "v1" },
});

export const changeVersionValue = (version: Option) => {
  const currentStore = $versions.get();
  $versions.set({ ...currentStore, currentVersion: version });
};

export const updateVersionsItems = (newItems: Option[]) => {
  const currentStore = $versions.get();
  const uniqueItems = uniqBy([...currentStore.items, ...newItems], "value");
  $versions.set({ ...currentStore, items: uniqueItems });
};
