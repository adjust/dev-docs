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
}

export interface NavigationEntry {
  title: string;
  "sidebar-position"?: number;
  "sidebar-label"?: string;
  "category-title"?: string;
  slug: string;
  url: string;
  path: string;
}

export interface GroupedNavigationItems {
  [langKey: string]: { [categoryKey: string]: CategoryEntry };
}
