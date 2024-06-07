import { useEffect, type FC } from "react";
import classNames from "classnames";
import { useStore } from "@nanostores/react";

import { $versions, updateVersionsItems } from "@store/sdkVersionsStore";

const VersionComponent: FC<VersionProps> = ({ content, version }) => {
  const versionsStore = useStore($versions);

  const versionOption = [{ label: version, value: version }];

  useEffect(() => {
    updateVersionsItems(versionOption);
  }, []);

  // We render the block as "none" rather than not rendering it at all.
  // This prevents issues with elements which get styled at build time
  // such as expressive code blocks

  return (
    <div
      className={classNames(
        version == versionsStore.currentVersion.value ? "block" : "hidden",
      )}
      role="SdkVersionSelector"
    >
      {content}
    </div>
  );
};

export default VersionComponent;
