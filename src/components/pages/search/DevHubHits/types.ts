import type { Hit } from "@algolia/client-search";

export interface HelpCenterIndexProps {
  algoliaKeys: {
    appId: string;
    apiKey: string;
  };
}

export interface HelpCenterResultCardProps {
  hit: Hit<any>;
  className: string;
}
