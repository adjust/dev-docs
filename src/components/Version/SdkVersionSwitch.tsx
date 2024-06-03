import { type FC, useEffect, useState } from "react";
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
  const [versionsOnPage, setVersionsOnPage] = useState(false);

  if (versions.items.length < 1) {
    return null; // Do not display the version switch if there are one or fewer options
  }

  useEffect(() => {
    // Check to see if there are any version blocks on the page.
    setVersionsOnPage(
      document.querySelector('[role="SdkVersionSelector"]') != null,
    );

    // Check the URL for a query parameter called "version"
    // If it exists and is in the array of supported versions, set the value of the store to the query param
    // Otherwise, set the URL query param to the current value of the store

    const queryVersion = getQueryParameter("version");
    if (queryVersion && supportedVersions.includes(queryVersion)) {
      const versionOption: Option = {
        label: queryVersion,
        value: queryVersion,
      };
      changeVersionValue(versionOption);
    } else {
      updateQueryParameter("version", versions.currentVersion.value);
    }
  }, []);

  const handleVersionChange = (newVersion: Option) => {
    // Set the new value in the store
    changeVersionValue(newVersion);
    // Update the query params in the URL
    updateQueryParameter("version", newVersion.value);
  };

  const label = t("sdkversionswitch.label");

  return (
    <div
      className={
        "flex flex-col w-full min-h-90px justify-start gap-y-8 bg-slate-100 p-6 rounded-lg mb-14 md:flex-row md:items-center md:gap-x-8 " +
        (!versionsOnPage ? "hidden" : "")
      }
    >
      <label>{label}</label>
      <ComboBox
        value={versions.currentVersion}
        options={versions.items}
        onChange={handleVersionChange}
      />
    </div>
  );
};

export default VersionSwitch;
