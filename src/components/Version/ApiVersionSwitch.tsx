import { type FC, useEffect, useCallback } from "react";
import { ComboBox } from "@adjust/components";
import { useStore } from "@nanostores/react";

import type { Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";
import type { Option } from "@adjust/components/build/ComboBox/ComboBox";
import { $versions, changeVersionValue } from "@store/apiVersionsStore";
import {
  getQueryParameter,
  updateQueryParameter,
} from "@components/utils/queryParamHelpers";
import type { CollectionEntry } from "astro:content";
import type { NavigationData } from "@utils/helpers/navigation/types";

interface VersionSwitchProps {
  lang: string;
  redirects: CollectionEntry<"docs">["data"]["redirects"];
  apiVersions: NavigationData["versions"]["api"];
}

const VersionSwitch: FC<VersionSwitchProps> = ({ lang }) => {
  const t = useTranslations(lang as keyof Locales);
  const versions = useStore($versions);

  if (versions.items.length < 1) {
    return null; // Return null if there's less than one version
  }

  // For APIs, we don't use "v4" as the default value. Instead, we should default to the
  // highest value in the array (e.g. "v2" over "v1")

  useEffect(() => {
    const higherVersion = versions.items.reduce((prev, current) =>
      prev && prev.value > current.value ? prev : current,
    );
    const queryVersion = getQueryParameter("version");
    if (
      queryVersion &&
      versions.items.some((version) => version.label === queryVersion)
    ) {
      const versionOption: Option = {
        label: queryVersion,
        value: queryVersion,
      };
      changeVersionValue(versionOption);
    } else {
      changeVersionValue(higherVersion);
    }
  }, [versions.items]);

  const updateApiVersionVisibility = useCallback(() => {
    const apiVersionSelectors = document.querySelectorAll(
      "[role='ApiVersionSelector']",
    );

    apiVersionSelectors.forEach((selector) => {
      const version = selector.getAttribute("data-message"); // The version number is assigned to the data-message attribute
      const currentVersion = versions.currentVersion.value;

      if (version !== currentVersion) {
        selector.classList.add("hidden");
      } else {
        selector.classList.remove("hidden");
      }
    });
    const event = new Event("versionUpdated");
    document.dispatchEvent(event);
  }, [versions.currentVersion.value]);

  useEffect(() => {
    updateApiVersionVisibility();
  }, [updateApiVersionVisibility]);

  const handleVersionChange = useCallback((newVersion: Option) => {
    // Set the new value in the store
    changeVersionValue(newVersion);
    // Update the query params in the URL
    updateQueryParameter("version", newVersion.value);
  }, []);

  const label = t("apiversionswitch.label");

  return (
    <div className="flex flex-col w-full min-h-90px justify-start gap-y-8 bg-slate-100 p-6 rounded-lg mb-14 md:flex-row md:items-center md:gap-x-8">
      <label htmlFor="combobox">{label}</label>
      <ComboBox
        id="combobox"
        value={versions.currentVersion}
        options={versions.items}
        onChange={handleVersionChange}
        isSearchable={false}
      />
    </div>
  );
};

export default VersionSwitch;
