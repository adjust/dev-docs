import { Tabs } from "@adjust/components";
import { useEffect, useState } from "react";

import { getSearchParams, setSearchParams } from "./utils";

const categoryItems = [
  { id: "all", label: "All" },
  {
    id: "api",
    label: "API reference",
  },
  {
    id: "sdk",
    label: "SDK",
  },
];

const PlatformTabs = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const onTabChange = (tabId: string) => {
    setSearchParams({ categoryValue: tabId });
  };

  useEffect(() => {
    const { category } = getSearchParams();
    setSelectedTab(category);
  }, []);

  return (
    <Tabs items={categoryItems} value={selectedTab} onChange={onTabChange} />
  );
};

export default PlatformTabs;
