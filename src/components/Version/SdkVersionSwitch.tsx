import { type FC, useEffect, useState } from "react";
import { ComboBox } from "@adjust/components";
import { useStore } from "@nanostores/react";

import { $versions, changeVersionValue } from "@store/sdkVersionsStore";

const VersionSwitch: FC = () => {
  const versions = useStore($versions);
  const versionsPresent = false;
  const [versionsOnPage, setversionsPresent] = useState(versionsPresent);

  if (versions.items.length < 1) {
    // we don`t need to display the version switch when we have only one or less options
    return null;
  }

  useEffect(() => {
    setversionsPresent(
      document.querySelector('[role="SdkVersionSelector"]') != null,
    );
  });

  let label = "Select your SDK version:";

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
        onChange={changeVersionValue}
      />
    </div>
  );
};

export default VersionSwitch;
