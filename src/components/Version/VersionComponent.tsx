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

  if (version !== versionsStore.currentVersion.value) {
    return null;
  }

  return <div className="py-4">{content}</div>;
};

export default VersionComponent;
