import type { MarkdownHeading } from "astro";

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
    v4: string;
    v5: string;
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
