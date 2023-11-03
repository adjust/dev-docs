import ContactSupportButton from "./ContactSupportButton";

import type { ContactSupportBlockProps } from "./types";

const ContactSupportBlock: React.FC<ContactSupportBlockProps> = ({
  language,
}) => {
  return (
    <div className="sm:h-20 xs:py-4 sm:py-0 bg-blue-light rounded-lg flex xs:flex-col sm:flex-row justify-center items-center">
      Can't find what you're looking for?
      <ContactSupportButton language={language} />
    </div>
  );
};

export default ContactSupportBlock;
