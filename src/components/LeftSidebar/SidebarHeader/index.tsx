import AdjustLogo from "@components/Icons/react/AdjustLogo";
import AudienceDropdown from "./AudienceDropdown";

const SidebarHeader = () => {
  return (
    <div className="flex flex-row items-center mb-[74px] pt-7 pl-[27px]">
      <AdjustLogo />
      <AudienceDropdown />
    </div>
  );
};

export default SidebarHeader;
