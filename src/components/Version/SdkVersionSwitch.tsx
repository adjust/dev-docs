import { type FC, useEffect, useCallback } from "react";
import { ComboBox } from "@adjust/components";
import { useStore } from "@nanostores/react";
import type { Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";
import type { Option } from "@adjust/components/build/ComboBox/ComboBox";
import {
  getQueryParameter,
  updateQueryParameter,
} from "@components/utils/queryParamHelpers";
import { $versions, changeVersionValue } from "@store/sdkVersionsStore";

// Declare the supported values.
// If another value is provided (e.g. "version=v3"), ignore it.

const supportedVersions = ["v4", "v5"];

const VersionSwitch: FC<{ lang: string }> = ({ lang }) => {
  const t = useTranslations(lang as keyof Locales);
  const versions = useStore($versions);

  useEffect(() => {
    const queryVersion = getQueryParameter("version");
    if (queryVersion && supportedVersions.includes(queryVersion)) {
      changeVersionValue({ label: queryVersion, value: queryVersion });
    } else {
      updateQueryParameter("version", versions.currentVersion.value);
    }
  }, []);

  const updateSdkVersionVisibility = useCallback(() => {
    const sdkVersionSelectors = document.querySelectorAll(
      "[role='SdkVersionSelector']",
    );

    sdkVersionSelectors.forEach((selector) => {
      const version = selector.getAttribute("data-message"); // The version number is stored in the data-message attribute
      const currentVersion = versions.currentVersion.value;

      if (version !== currentVersion) {
        selector.classList.add("hidden");
      } else {
        selector.classList.remove("hidden");
      }
    });

    // Dispatch a custom event to notify that the SDK version visibility has been updated
    const event = new Event("versionUpdated");
    document.dispatchEvent(event);
  }, [versions.currentVersion.value]);

  useEffect(() => {
    updateSdkVersionVisibility();
  }, [updateSdkVersionVisibility]);

  useEffect(() => {
    const queryVersion = getQueryParameter("version");
    if (versions.currentVersion.value !== queryVersion) {
      updateQueryParameter("version", versions.currentVersion.value);
    }
  }, [versions.currentVersion.value]);

  const handleVersionChange = useCallback((newVersion: Option) => {
    changeVersionValue(newVersion);
  }, []);

  const label = t("sdkversionswitch.label");

  return (
    <div
      id="combobox-holder"
      className="flex flex-col w-full min-h-90px justify-start gap-y-8 bg-slate-100 p-6 rounded-lg mb-14 md:flex-row md:items-center md:gap-x-8"
    >
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
