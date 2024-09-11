import { type FC, useEffect, useCallback } from "react";
import { ComboBox } from "@adjust/components";
import { useStore } from "@nanostores/react";

import type { Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";
import { getCurrentPage } from "@utils/helpers/navigation/getCurrentPage";
import type { Option } from "@adjust/components/build/ComboBox/ComboBox";
import {
  $versions,
  changeVersionValue,
  updateVersionsItems,
  type VersionStore,
} from "@store/apiVersionsStore";
import type { CollectionEntry } from "astro:content";
import type { NavigationData } from "@utils/helpers/navigation/types";

interface VersionSwitchProps {
  lang: string;
  redirects: CollectionEntry<"docs">["data"]["redirects"];
  apiVersions: NavigationData["versions"]["api"];
}

const VersionSwitch: FC<VersionSwitchProps> = ({
  lang,
  apiVersions,
  redirects,
}) => {
  const t = useTranslations(lang as keyof Locales);
  const versions = useStore($versions);

  const handleVersionChange = useCallback(
    (newVersion: VersionStore["currentVersion"]) => {
      changeVersionValue(newVersion);

      const redirectValue = (redirects as { [key: string]: string })?.[
        newVersion.value
      ];

      const href = location.href;
      if (newVersion.value !== versions.currentVersion.value) {
        if (redirectValue) {
          return (location.href = redirectValue);
        }

        const defaultVersionReg = /\/(\w*)v\d/gi;
        const versionReg = /\/api\/(\w*)(\/|$)/gi;

        if (newVersion.default) {
          return (location.href = href.replace(defaultVersionReg, "$1"));
        }

        return (location.href = href.replace(
          versionReg,
          `/api/$1/${newVersion.value}/`,
        ));
      }
    },
    [],
  );

  const handleUrlVersion = () => {
    const url = location.href;
    const urlVersion = url.match(/(\w*)v\d/gi);
    if (!getCurrentPage(url).endsWith("/api")) {
      // if we have a version in the URL and it`s not the current version we change current selected to this version
      if (
        urlVersion?.length &&
        versions.currentVersion.value !== urlVersion[0]
      ) {
        const version = apiVersions!.find(
          (item) => item.value === urlVersion[0],
        );
        if (version) {
          return changeVersionValue(version);
        }
      }
      // we change the version to the default if we can`t update the version by the current URL
      if (
        !urlVersion?.length ||
        !apiVersions!.find((item) => item.value === urlVersion[0])
      ) {
        return changeVersionValue(apiVersions!.find((item) => item.default)!);
      }
    }
  };

  useEffect(() => {
    handleUrlVersion();
  }, []);

  // need to add versions from the page data to the SDK versions store
  useEffect(() => {
    updateVersionsItems(apiVersions as Option[]);
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
