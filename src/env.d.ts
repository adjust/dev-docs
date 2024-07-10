/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string | undefined;
  readonly HELP_CENTER_ALGOLIA_APP_ID: string;
  readonly HELP_CENTER_ALGOLIA_API_KEY: string;
  readonly HELP_CENTER_ALGOLIA_INDEX_NAME: string;
  readonly DEV_HUB_TYPESENSE_HOST: string;
  readonly DEV_HUB_TYPESENSE_API_KEY: string;
  readonly DEV_HUB_TYPESENSE_INDEX_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
