// Declare a type that matches the type used in the Banner package.
// All banners must be one of these types. See the Banner documentation.
// https://atlas.adeven.com/docs/components/Banner

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

declare interface VersionMap {
  [key: string]: string | {
    [key: string]: string;
  };
}

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
