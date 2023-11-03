import type { FC } from "react";

import { HELP_CENTER_LINK } from "src/consts";
import type { IWithLanguage } from "src/types/WithLanguage";

const ContactSupportButton: FC<IWithLanguage> = ({
  language,
  contentLevel,
}) => {
  return (
    <a
      key="contact"
      href={`${HELP_CENTER_LINK}/${language}/support`}
      className="flex items-center justify-center px-3 min-h-[39px] text-white bg-dark-blue rounded-3xl border-2 border-white cursor-pointer min-w-[206px] font-medium hover:bg-[#3957f2]"
    >
      {contentLevel ? "Contact Us" : "Contact Support"}
    </a>
  );
};

export default ContactSupportButton;
