export enum Languages {
   EN = "en",
   JA = "ja",
   KO = "ko",
   ZH = "zh",
}

export interface ContentCollectionEntry {
   id: string;
   slug: string;
   body: string;
   collection: string;
   data: {
      title: string;
      description: string;
      "sidebar-label"?: string;
      "sidebar-position"?: number;
      "category-title"?: string | undefined;
      navPath?: string;
      lang: string;
      redirects?: Record<string, string>;
      dir: "ltr" | "rtl";
      image?: {
         src: string;
         alt: string;
      }
      ogLocale?: string;
      type?: "category"
      multiVersion: boolean;
      versions?: {
         value: string;
         label: string;
         default?: boolean;
      }[]
   },
   render: Function;
}

export interface Breadcrumb {
   title: string;
   url: string;
   level: number;
}

export interface SidebarItem {
   id: string,
   title: string,
   description: string,
   slug: string,
   parent?: string,
   categoryTitle?: string,
   label?: string,
   position?: number,
   children?: SidebarItem[],
   type?: "category"
   version?: string;
}

export interface LanguageTree {
   api: SidebarItem[];
   sdk: SidebarItem[];
}

export type LanguageTrees = Record<Languages, LanguageTree>
