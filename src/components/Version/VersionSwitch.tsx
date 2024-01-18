import type { FC } from "react";
import { ComboBox } from "@adjust/components";
import { useStore } from "@nanostores/react";

import { $versions, changeVersionValue } from "@store/versionsStore";

const VersionSwitch: FC = () => {
  const versions = useStore($versions);

  if (versions.items.length < 1) {
    // we don`t need to display the version switch when we have only one or less options
    return null;
  }

  return (
    <div className="flex flex-col w-full min-h-90px justify-start gap-y-8 bg-slate-100 p-6 rounded-lg mb-14 md:flex-row md:items-center md:gap-x-8">
      <label>Select your SDK version:</label>
      <ComboBox
        value={versions.currentVersion}
        options={versions.items}
        onChange={changeVersionValue}
      />
    </div>
  );
};

export default VersionSwitch;
