export const adjustLink = "https://www.adjust.com";
import { defaultLang } from "@i18n/locales";
import { ui } from "@i18n/ui";

interface FooterLinks {
  id: keyof (typeof ui)[typeof defaultLang];
  url: string
}

export const footerLinks: FooterLinks[] = [
  { id: "footer.about-us", url: `${adjustLink}/company/` },
  { id: "footer.security", url: `${adjustLink}/security/` },
  {
    id: "footer.privacy-policy",
    url: `${adjustLink}/terms/privacy-policy/`,
  },
  {
    id: "footer.terms",
    url: `${adjustLink}/terms/general-terms-and-conditions/`,
  },
  { id: "footer.ccpa-gdpr", url: `${adjustLink}/terms/ccpa/` },
  {
    id: "footer.legal-notice",
    url: `${adjustLink}/terms/impressum/`,
  },
];

export const footerIcons = [
  {
    name: "wechat-icon",
    readableName: "WeChat",
    link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIzODg5ODQwMg==",
  },
  { name: "facebook-icon", readableName: "Facebook", link: "https://www.facebook.com/adjustcom" },
  { name: "twitter-icon", readableName: "Twitter", link: "https://twitter.com/adjustcom" },
  { name: "instagram-icon", readableName: "Instagram", link: "https://www.instagram.com/adjustcom/" },
  {
    name: "linkedin-icon",
    readableName: "LinkedIn",
    link: "https://www.linkedin.com/company/adjustcom/",
  },
  {
    name: "youtube-icon",
    readableName: "YouTube",
    link: "https://www.youtube.com/channel/UCLxY21pzKyjTuODjUytJIsA",
  },
];
