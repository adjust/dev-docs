import { useState } from "react";

import { FilterButton } from "@adjust/components";

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
      items={platforms}
      selectedItems={selectedItems}
      showSearch={false}
      onApply={setSelectedItems}
      showResetButton
    />
  );
};

export default PlatformFilter;
