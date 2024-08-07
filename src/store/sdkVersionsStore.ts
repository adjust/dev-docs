import { persistentMap } from "@nanostores/persistent";
import { uniqBy } from "lodash-es";
import type { Option } from "@adjust/components/build/ComboBox/ComboBox";

interface VersionStore {
  items: Option[];
  currentVersion: Option;
}

// Declare the supported values.
export const supportedVersions = [
  { label: "v4", value: "v4" },
  { label: "v5", value: "v5" },
];

export const $versions = persistentMap<VersionStore>(
  "sdkVersion:",
  {
    items: supportedVersions,
    currentVersion: { label: "v5", value: "v5" },
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

export const changeVersionValue = (version: Option) => {
  const currentStore = $versions.get();
  $versions.set({ ...currentStore, currentVersion: version });
};

export const updateVersionsItems = (newItems: Option[]) => {
  const currentStore = $versions.get();
  const uniqueItems = uniqBy([...currentStore.items, ...newItems], "value");
  $versions.set({ ...currentStore, items: uniqueItems });
};
