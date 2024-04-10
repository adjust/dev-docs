import { map } from "nanostores";
import uniqBy from "lodash-es/uniqBy";

import type { Option } from "@adjust/components/build/ComboBox/ComboBox";

interface VersionStore {
   items: Option[];
   currentVersion: Option;
}

export const $versions = map<VersionStore>({
   items: [],
   currentVersion: { label: "v1", value: "v1" },
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
