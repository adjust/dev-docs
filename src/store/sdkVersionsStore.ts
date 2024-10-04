import { persistentMap } from "@nanostores/persistent";
import { uniqBy } from "lodash-es";

interface Option {
  label: string;
  value: string;
  default?: boolean;
}

export interface VersionStore {
  items: Option[]
  currentVersion: Option
}

// Declare the supported values.
export const supportedVersions = [
  { label: "v4", value: "v4" },
  { label: "v5", value: "v5", default: true },
];

export const $versions = persistentMap<VersionStore>(
  "sdkVersion:",
  {
    items: [],
    currentVersion: { label: "v5", value: "v5", default: true },
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
