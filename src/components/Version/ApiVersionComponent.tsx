import { useEffect, type FC } from "react";
import { useStore } from "@nanostores/react";

import { $versions, updateVersionsItems } from "@store/apiVersionsStore";

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
      className={
        version == versionsStore.currentVersion.value ? "block" : "hidden"
      }
      role="ApiVersionSelector"
    >
      {content}
    </div>
  );
};

export default VersionComponent;
