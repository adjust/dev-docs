import AdjustLogo from "./AdjustLogo";
import AudienceDropdown from "./AudienceDropdown";

const SidebarHeader = () => {
  return (
    <div className="flex flex-row mb-[74px] pt-7 pl-[27px]">
      <AdjustLogo />
      <AudienceDropdown />
    </div>
  );
};

export default SidebarHeader;
