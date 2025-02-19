/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string | undefined;
  readonly TYPESENSE_HOST: string;
  readonly TYPESENSE_API_KEY: string;
  readonly HELP_CENTER_TYPESENSE_INDEX_NAME: string;
  readonly HELP_CENTER_TYPESENSE_SEARCH_PRESET: string;
  readonly DEV_HUB_TYPESENSE_INDEX_NAME: string;
  readonly DEV_HUB_TYPESENSE_SEARCH_PRESET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
