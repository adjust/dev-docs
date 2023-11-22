import classNames from "classnames";
import { useEffect, useState } from "react";

const platforms = [
  { label: "All platforms", value: "all" },
  { label: "IOS", value: "ios" },
  { label: "Flutter", value: "flutter" },
  { label: "React Native", value: "react-native" },
  { label: "Unity", value: "unity" },
  { label: "Web", value: "web" },
];

const PlatformBadges = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);

  const onPlatformChanges = (platform: { label: string; value: string }) => {
    document.location.search = `platform=${platform.value}`;
    setSelectedPlatform(platform);
  };

  useEffect(() => {
    const query = new URLSearchParams(document.location.search);
    setSelectedPlatform(
      platforms.find((platform) => platform.value === query.get("platform"))!
    );
  });

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
          key={platform.value}
          onClick={() => onPlatformChanges(platform)}
        >
          <span className="font-medium text-base-xs">{platform.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PlatformBadges;
