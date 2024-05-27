import { Tabs } from "@adjust/components";
import { useEffect, useState } from "react";
import type { Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";

import { getSearchParams, setSearchParams } from "./utils";

interface PlatformTabProps {
  lang: string;
}

const PlatformTabs = (props: PlatformTabProps) => {
  const t = useTranslations(props.lang as keyof Locales);
  const categoryItems = [
    { id: "all", label: t("search.all-results-filter") },
    {
      id: "api",
      label: t("search.api-results-filter"),
    },
    {
      id: "sdk",
      label: t("search.sdk-results-filter"),
    },
  ];
  const [selectedTab, setSelectedTab] = useState("all");

  const onTabChange = (tabId: string) => {
    setSearchParams({ categoryValue: tabId, pageValue: 1, lang: props.lang });
  };

  useEffect(() => {
    const handleSearchChange = () => {
      const { category } = getSearchParams();
      setSelectedTab(category);
    };

    // Listen for changes in the URL
    window.addEventListener("popstate", handleSearchChange);
    // Initial load
    handleSearchChange();

    return () => {
      window.removeEventListener("popstate", handleSearchChange);
    };
  }, []);

  return (
    <Tabs items={categoryItems} value={selectedTab} onChange={onTabChange} />
  );
};

export default PlatformTabs;
