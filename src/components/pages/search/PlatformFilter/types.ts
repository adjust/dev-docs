export type PlatformLabelValue =
  | "all"
  | "ios"
  | "flutter"
  | "reactNative"
  | "unity"
  | "web";

export interface FilterItemGrouped {
  label: string;
  value: PlatformLabelValue;
  dataTestId?: string;
  isGroupLabel?: boolean;
}

export interface PlatformFilterBadgeProps {
  items: FilterItemGrouped[];
}
