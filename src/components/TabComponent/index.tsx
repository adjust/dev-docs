/** @jsxImportSource react */
import { useStore } from "@nanostores/react";
import { useEffect, type FC, useState } from "react";
import classNames from "classnames";

import { $tabs } from "@store/tabStore";

const TabComponent: FC<{
  content: string;
  sync: string;
}> = (props) => {
  const tabs = useStore($tabs);
  // for some reason, this component don`t normally render with the default value so we need to use additional store
  const [currentTab, setCurrentTab] = useState(props.sync);

  useEffect(() => {
    setCurrentTab(tabs.currentSync);
  }, [tabs.currentSync]);

  return (
    <div
      className={classNames("block", { hidden: props.sync !== currentTab })}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  );
};

export default TabComponent;
