/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly GITHUB_TOKEN: string | undefined;
  readonly ALGOLIA_INDEX_NAME: string | undefined;
  readonly ALGOLIA_APP_ID: string | undefined;
  readonly ALGOLIA_API_KEY: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
