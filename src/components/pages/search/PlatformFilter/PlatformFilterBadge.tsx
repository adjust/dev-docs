import type { FC } from "react";
import { Badge } from "@adjust/components";

import type { PlatformFilterBadgeProps, PlatformLabelValue } from "./types";

import "./platform-filter.css";

const PlatformFilterBadge: FC<PlatformFilterBadgeProps> = ({ items }) => {
  const currentChoice = items[0];

  const getBadgeColor = (value: PlatformLabelValue) => {
    if (value === "all") {
      return "neutral";
    }

    return `primary`;
  };

  return (
    <div
      className="font-body"
      style={{ display: "flex", alignItems: "center" }}
    >
      <span className="text-base font-medium">Platform</span>
      <div className="search_platform-filter_badge text-sm">
        <Badge
          color={getBadgeColor(currentChoice?.value) as BadgeColor}
          label={currentChoice?.label}
          css={{ marginLeft: "11px", fontSize: "14px" }}
        />
      </div>
    </div>
  );
};

export default PlatformFilterBadge;
