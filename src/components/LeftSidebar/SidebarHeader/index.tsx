import type { FC } from "react";

import AdjustLogo from "@components/Icons/react/AdjustLogo";
import AudienceDropdown from "./AudienceDropdown";

const SidebarHeader: FC<{ homeUrl: string }> = ({ homeUrl }) => {
  return (
    <div className="sidebar-header flex flex-row items-center mb-[74px] pt-7 pl-[27px]">
      <a href={homeUrl}>
        <AdjustLogo />
      </a>
      <AudienceDropdown />
    </div>
  );
};

export default SidebarHeader;
