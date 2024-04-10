import { persistentMap } from "@nanostores/persistent";
import uniqBy from "lodash-es/uniqBy";

import type { Option } from "@adjust/components/build/ComboBox/ComboBox";

interface VersionStore {
  items: Option[];
  currentVersion: Option;
}

export const $versions = persistentMap<VersionStore>("sdkVersion:", {
  items: [],
  currentVersion: { label: "v4", value: "v4" }
}, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const changeVersionValue = (version: Option) => {
  $versions.set({ ...$versions.get(), currentVersion: version });
};

export const updateVersionsItems = (newItems: Option[]) => {
  const versionsStoredData = $versions.get();
  const versionsUnique = uniqBy(
    [...versionsStoredData.items, ...newItems],
    "value"
  );

  $versions.set({
    ...versionsStoredData,
    items: versionsUnique,
  });
};
