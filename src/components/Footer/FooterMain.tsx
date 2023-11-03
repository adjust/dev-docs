import type { FC } from "react";
import classNames from "classnames";

// import Icon from "components/common/Icon";
import ContactSupportButton from "./ContactSupportBlock/ContactSupportButton";
// import FooterLanguageSwitch from "./FooterLanguageSwitch";
import { footerIcons, footerLinks } from "./static";
import type { FooterProps } from "./types";

const FooterMain: FC<FooterProps> = ({ language }) => {
  return (
    <footer id="common-footer" className="flex flex-col w-full bg-[#F4F7FF]">
      <div className="px-24">
        <div
          id="footer_contact-us-block"
          className="flex xs:flex-col lg:flex-row  xs:h-full md:h-[39px] xs:justify-center lg:justify-between items-center mt-[52px]"
        >
          <p
            className="text-[25px] font-semibold text-center text-footer-main"
            data-testid="contact-support.title"
          >
            Can't find what you're looking for? Get in touch
          </p>
          <ContactSupportButton language={language} contentLevel={false} />
        </div>
        <div className=" my-[41px]">
          <hr className="w-full text-main-blue-30" />
        </div>
        <div
          className={classNames(
            "flex justify-between xs:h-auto lg:h-[39px] xs:pb-12 lg:pb-0 xs:flex-col sm:flex-row mb-[37px]"
          )}
        >
          <div className="flex flex-wrap items-center w-full xs:pb-4 lg:pb-0  xs:pl-4 sm:pl-0 gap-y-[6px]">
            {footerLinks.map((lnk) => (
              <div key={lnk.text} className="xs:w-1/2 md:w-1/3">
                <a
                  data-testid="footer.link"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_link text-xs font-semibold cursor-default text-footer-main xs:pb-1 sm:pb-0 h-fit block"
                  href={lnk.url}
                >
                  {lnk.text}
                </a>
              </div>
            ))}
          </div>
          <div
            className={classNames(
              "flex xs:flex-col md:flex-row gap-x-[35px] items-center"
            )}
          >
            {/* <FooterLanguageSwitch /> */}
            <div className="flex flex-row  xs:pb-4 md:pb-0 items-center gap-x-[24px] md:gap-x-4">
              {footerIcons.map((icon) => (
                <a
                  data-testid="footer.link"
                  key={icon.name}
                  target="_blank"
                  rel="noreferrer"
                  className="xs:pb-1 sm:pb-0 text-footer-main"
                  href={icon.link}
                >
                  {/* <Icon key={icon.name} name={icon.name} noMargin /> */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[41px] w-full px-24 flex items-center text-xs bg-footer-main text-white">
        © 2023 Adjust GmbH. All rights reserved
      </div>
    </footer>
  );
};

export default FooterMain;
