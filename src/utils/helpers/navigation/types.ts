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
  url?: string;
  topCategory: boolean;
  description: string;
  type: NavItemTypes;
}

export interface NavigationEntry {
  title: string;
  "sidebar-position"?: number;
  "sidebar-label"?: string;
  "category-title"?: string;
  slug: string;
  url: string;
  path: string;
  description: string;
  type: NavItemTypes;
}

export interface GroupedNavigationItems {
  [langKey: string]: { [categoryKey: string]: CategoryEntry };
}

export interface ChildLink {
  slug: string;
  title: string;
  description: string;
}

export interface NavigationData {
  languageTree: { [key: string]: CategoryEntry };
  breadcrumbs: {
    title: string;
    url: string;
    level: number;
  }[];
  childLinks: ChildLink[];
}
