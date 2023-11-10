import { useState } from "react";
import { FilterButton } from "@adjust/components";

import PlatformFilterBadge from "./PlatformFilterBadge";
import type { FilterItemGrouped } from "./types";

import "./platform-filter.css";

const platforms = [
  { label: "All", value: "all" },
  { label: "IOS", value: "ios" },
  { label: "Flutter", value: "flutter" },
  { label: "React Native", value: "reactNative" },
  { label: "Unity", value: "unity" },
  { label: "Web", value: "web" },
];
const PlatformFilter = () => {
  const [selectedItems, setSelectedItems] = useState([platforms[0]]);

  return (
    <FilterButton
      name="Platform"
      multiple={false}
      size="medium"
      items={platforms}
      renderValue={(items) => (
        <PlatformFilterBadge items={items as FilterItemGrouped[]} />
      )}
      selectedItems={selectedItems}
      aria-label="platform-filter"
      showSearch={false}
      onApply={setSelectedItems}
      showResetButton
    />
  );
};

export default PlatformFilter;
