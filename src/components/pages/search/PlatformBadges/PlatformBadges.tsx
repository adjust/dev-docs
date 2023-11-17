import classNames from "classnames";
import { useState } from "react";

const platforms = [
  { label: "All platforms", value: "all" },
  { label: "IOS", value: "ios" },
  { label: "Flutter", value: "flutter" },
  { label: "React Native", value: "reactNative" },
  { label: "Unity", value: "unity" },
  { label: "Web", value: "web" },
];

const PlatformBadges = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);

  return (
    <div className="xs:px-2 md:px-0 flex flex-row flex-wrap gap-x-2.5 gap-y-3">
      {platforms.map((platform) => (
        <div
          className={classNames(
            "border-[1px] border-black rounded-3xl px-5 py-1 hover:bg-[#1944C3] hover:text-white cursor-pointer",
            {
              "bg-[#255EEE] text-white":
                selectedPlatform.value === platform.value,
              "bg-white text-black": selectedPlatform.value !== platform.value,
            }
          )}
          onClick={() => setSelectedPlatform(platform)}
        >
          <span className="font-medium text-base-xs">{platform.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PlatformBadges;
