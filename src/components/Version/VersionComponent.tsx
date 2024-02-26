import { useEffect, type FC } from "react";
import { useStore } from "@nanostores/react";

import { $versions, updateVersionsItems } from "@store/versionsStore";

const VersionComponent: FC<{
  content?: JSX.Element;
  version: string;
}> = ({ content, version }) => {
  const versionsStore = useStore($versions);

  const versionOption = [{ label: version, value: version }];

  useEffect(() => {
    updateVersionsItems(versionOption);
  }, []);

  // We render the block as "none" rather than not rendering it at all.
  // This prevents issues with elements which get styled at build time
  // such as expressive code blocks

  return <div style={{display: (version == versionsStore.currentVersion.value) ? 'block' : 'none' }} className="py-4">{content}</div>;
};

export default VersionComponent;
