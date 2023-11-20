import { Tabs } from "@adjust/components";

const items = [
  { id: "1", label: "All", url: "#" },
  {
    id: "2",
    label: "API reference",
    url: "#api",
  },
  {
    id: "3",
    label: "SDK",
    url: "#sdk",
  },
];

const PlatformTabs = () => {
  return <Tabs items={items} value="1" />;
};

export default PlatformTabs;
