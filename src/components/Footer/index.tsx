import React, { FC } from "react";
import classNames from "classnames";

import Icon from "components/common/Icon";
import LocalizedLabel from "i18n/components/LocalizedLabel";
import ContactSupportButton from "components/ContactSupportBlock/ContactSupportButton";
import FooterLanguageSwitch from "./FooterLanguageSwitch";
import { FooterProps } from "./types";
import { footerIcons, footerLinks } from "./static";

const Footer: FC<FooterProps> = ({ language, withSupport = true, contentLevel = true, placeholdersPage = false }) => {
  return (
    <footer
      id="common-footer"
      data-testid="common.footer"
      className={classNames("flex flex-col bg-color-neutral-5 w-full relative z-[25]", {
        "md:h-[225px]": withSupport,
        "md:h-[155px]": !withSupport,
        "md:h-[427px]": placeholdersPage,
      })}
    >
      {withSupport && (
        <div
          id="footer_contact-us-block"
          className={classNames(
            "flex xs:flex-col lg:flex-row mt-[30px] xs:h-full md:h-[39px] px-12 xs:justify-center lg:justify-between items-center",
            {
              "px-[120px]": !contentLevel,
            },
          )}
        >
          <p className="text-[25px] font-semibold text-center" data-testid="contact-support.title">
            {contentLevel ? (
              "Have a question? Get in touch"
            ) : (
              <LocalizedLabel language={language} id="frontpage.contact-support-main" />
            )}
          </p>
          <ContactSupportButton language={language} contentLevel={contentLevel} />
        </div>
      )}
      <div
        className={classNames("mb-[19px] px-12", {
          "mt-[30px]": !withSupport,
          "mt-[21px]": withSupport,
          "px-[120px]": !contentLevel,
        })}
      >
        <hr className="w-full text-main-blue-30" />
      </div>
      <div
        className={classNames(
          "flex justify-between xs:h-auto lg:h-[39px] px-12 xs:pb-12 lg:pb-0 xs:flex-col sm:flex-row",
          {
            "px-[120px]": !contentLevel,
          },
        )}
      >
        <div className="flex flex-wrap items-center w-full xs:pb-4 lg:pb-0  xs:pl-4 sm:pl-0 gap-y-[6px]">
          {footerLinks.map(lnk => (
            <div key={lnk.id} className="xs:w-1/2 md:w-1/3">
              <a
                data-testid="footer.link"
                className="footer_link text-xs font-semibold cursor-default text-color-neutral-90 xs:pb-1 sm:pb-0 h-fit block"
                href={lnk.url}
              >
                <LocalizedLabel className="cursor-pointer" id={lnk.id} language={language} />
              </a>
            </div>
          ))}
        </div>
        <div className={classNames("flex xs:flex-col md:flex-row gap-x-[35px] xs:pb-4 md:pb-0 items-center")}>
          {!contentLevel && <FooterLanguageSwitch />}
          <div
            className={classNames("flex flex-row  xs:pb-4 md:pb-0 items-center gap-x-[24px]", {
              "md:gap-x-4": !contentLevel,
            })}
          >
            {footerIcons.map(icon => (
              <a data-testid="footer.link" key={icon.name} className="xs:pb-1 sm:pb-0" href={icon.link}>
                <Icon key={icon.name} name={icon.name} noMargin />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "h-[41px] w-full bg-main-blue-30 absolute bottom-0 px-12 flex items-center text-xs text-color-neutral-140",
          {
            "px-[120px]": !contentLevel,
          },
        )}
      >
        © 2023 Adjust GmbH. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
