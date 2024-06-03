import { type FC, useEffect } from "react";
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

const VersionSwitch: FC<{ lang: string }> = ({ lang }) => {
  const t = useTranslations(lang as keyof Locales);
  const versions = useStore($versions);

  if (versions.items.length < 1) {
    // we don`t need to display the version switch when we have only one or less options
    return null;
  }

  // For APIs, we don't use "v4" as the default value. Instead, we should default to the
  // highest value in the array (e.g. "v2" over "v1").

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
  }, []);

  const handleVersionChange = (newVersion: Option) => {
    // Set the new value in the store
    changeVersionValue(newVersion);
    // Update the query params in the URL
    updateQueryParameter("version", newVersion.value);
  };

  let label = t("apiversionswitch.label");

  return (
    <div className="flex flex-col w-full min-h-90px justify-start gap-y-8 bg-slate-100 p-6 rounded-lg mb-14 md:flex-row md:items-center md:gap-x-8">
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
