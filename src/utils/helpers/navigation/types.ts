import type { Locales } from "@i18n/locales";
import type { CollectionEntry } from "astro:content";

export type NavItemTypes = "category";

export interface CategoryEntry {
  children: CategoryEntry[];
  title: string;
  slug: string;
  position?: number;
  parentId: string | undefined | null;
  collapsed: boolean;
  level: number;
  path: string;
  updatedPath: string;
  url?: string;
  topCategory: boolean;
  description: string;
  type: NavItemTypes;
  version: string | null;
}

export interface NavigationEntry {
  title: string;
  "sidebar-position"?: number;
  "sidebar-label"?: string;
  "category-title"?: string;
  slug: string;
  updatedPath: string;
  url: string;
  path: string;
  description: string;
  type: NavItemTypes;
  version: string | null;
}

export interface GroupedNavigationItems {
  [langKey: string]: { [categoryKey: string]: CategoryEntry };
}

export interface ChildLink {
  slug: string;
  title: string;
  description: string;
  position?: number;
}

export interface NavigationData {
  languageTree: { [key in keyof Partial<Locales>]: CategoryEntry };
  breadcrumbs: {
    title: string;
    url: string;
    level: number;
  }[];
  childLinks: ChildLink[];
  versions: {
    sdk: CollectionEntry<"docs">["data"]["versions"];
    api: CollectionEntry<"docs">["data"]["versions"];
  };
}
