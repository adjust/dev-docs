import type { MarkdownHeading } from "astro";

declare type BannerKind =
  | "neutral"
  | "positive"
  | "warning"
  | "negative"
  | "primary";

declare type CalloutType =
  | "info"
  | "note"
  | "tip"
  | "warning"
  | "important"
  | "seealso";

declare interface ApiObject {
  orgName: string;
  repoName: string;
  ref: string;
  file: string;
  range: string;
}

declare interface VersionProps {
  content?: JSX.Element;
  version: string;
}

interface VersionTag {
  [versionKey: string]: string;
}

interface PlatformVersion {
  versions: VersionTag | string;
  useSdkSuffix: boolean;
}

type VersionMap = {
  [platform: string]: PlatformVersion;
};

declare type BadgeColor =
  | "neutral"
  | "negative"
  | "positive"
  | "warning"
  | "primary";

declare type TableHeights = number | "full-height" | undefined;

declare interface MarkdownHeadingWithId extends MarkdownHeading {
  id?: String;
}
