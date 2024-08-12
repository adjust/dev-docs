import { type FC, useCallback, useEffect } from "react";
import { ComboBox } from "@adjust/components";
import { useStore } from "@nanostores/react";
import type { CollectionEntry } from "astro:content";

import type { Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";
import {
  $versions,
  changeVersionValue,
  supportedVersions,
  type VersionStore,
} from "@store/sdkVersionsStore";

interface SdkVersionSwitchProps {
  lang: string;
  redirects: CollectionEntry<"docs">["data"]["redirects"];
}

const VersionSwitch: FC<SdkVersionSwitchProps> = ({ lang, redirects }) => {
  const t = useTranslations(lang as keyof Locales);
  const versions = useStore($versions);

  const handleVersionChange = useCallback(
    (newVersion: VersionStore["currentVersion"]) => {
      changeVersionValue(newVersion);

      const redirectValue = (redirects as { [key: string]: string })?.[
        newVersion.value
      ];

      if (redirectValue) {
        return (location.href = redirectValue);
      }

      const defaultVersionReg = /\/(\w*)v\d/gi;
      const versionReg = /\/sdk\/(\w*)(\/|$)/gi;

      location.href = newVersion.default
        ? location.href.replace(defaultVersionReg, "$1")
        : location.href.replace(versionReg, `/sdk/$1/${newVersion.value}/`);
    },
    [],
  );

  const handleUrlVersion = () => {
    const url = location.href;
    const urlVersion = url.match(/(\w*)v\d/gi);
    // if we have a version in the URL and it`s not the current version we change current selected to this version
    if (urlVersion?.length && versions.currentVersion.value !== urlVersion[0]) {
      const version = supportedVersions.find(
        (item) => item.value === urlVersion[0],
      );
      if (version) {
        return changeVersionValue(version);
      }
    }
    // we change the version to the default if we can`t update the version by the current URL
    return changeVersionValue(supportedVersions.find((item) => item.default)!);
  };

  useEffect(() => {
    handleUrlVersion();
  }, []);

  const label = t("sdkversionswitch.label");

  return (
    <div
      id="combobox-holder"
      className="flex flex-col w-full min-h-90px justify-start gap-y-4 bg-slate-100 p-6 rounded-lg mb-14"
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
