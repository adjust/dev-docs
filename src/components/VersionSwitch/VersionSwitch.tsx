import { ComboBox } from "@adjust/components";
import type { FC } from "react";

const CURRENT_VERSIONS = [
  { value: "v5", label: "v5" },
  { value: "v4", label: "v4" },
];

const VersionSwitch: FC = () => {
  return (
    <div className="flex flex-col w-full min-h-90px justify-start gap-y-8 bg-slate-100 p-6 rounded-lg mb-14 md:flex-row md:items-center md:gap-x-8">
      <label>Select your SDK version:</label>
      <ComboBox value={CURRENT_VERSIONS[0]} options={CURRENT_VERSIONS} />
    </div>
  );
};

export default VersionSwitch;
