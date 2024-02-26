import { type FC, useEffect } from "react";
import { ComboBox } from "@adjust/components";
import { useStore } from "@nanostores/react";

import { $versions, changeVersionValue } from "@store/versionsStore";

const VersionSwitch: FC = () => {
  const versions = useStore($versions);
  const location = window.location.pathname.toString();

  if (versions.items.length < 1) {
    // we don`t need to display the version switch when we have only one or less options
    return null;
  }

  // For APIs, we don't use "v4" as the default value. Instead, we should default to the
  // highest value in the array (e.g. "v2" over "v1").

  useEffect(() => {
    if (!versions.items.find(o => o.label === "v4")) {
      const higherVersion = versions.items.reduce((prev, current) =>
        (prev && prev.value > current.value) ? prev : current
      )
      changeVersionValue(higherVersion)
    }
  }, []);


  let label = '';

  if (location.includes("sdk")) {
    label = "Select your SDK version:"
  }
  if (location.includes("api")) {
    label = "Select your API version:"
  }

  return (
    <div className="flex flex-col w-full min-h-90px justify-start gap-y-8 bg-slate-100 p-6 rounded-lg mb-14 md:flex-row md:items-center md:gap-x-8">
      <label>{label}</label>
      <ComboBox
        value={versions.currentVersion}
        options={versions.items}
        onChange={changeVersionValue}
      />
    </div>
  );
};

export default VersionSwitch;
