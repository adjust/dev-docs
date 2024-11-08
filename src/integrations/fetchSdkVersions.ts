import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

// Define type for SDK versions with multiple tags (v4, v5, etc.)
type MultiVersionTags = {
  [versionKey: string]: string;
};

// Define the main type for the version replacements
type VersionReplacements = {
  [platform: string]: MultiVersionTags | string;
};

const versionReplacements: VersionReplacements = {
  android: { v4: "x.x.x", v5: "x.x.x" },
  ios: { v4: "x.x.x", v5: "x.x.x" },
  unity: { v4: "x.x.x", v5: "x.x.x" },
  react_native: { v4: "x.x.x", v5: "x.x.x" },
  cordova: { v4: "x.x.x", v5: "x.x.x" },
  flutter: { v4: "x.x.x", v5: "x.x.x" },
  cocos2dx: { v4: "x.x.x", v5: "x.x.x" },
  android_adobe_extension: { v2: "x.x.x", v3: "x.x.x" },
  web: "x.x.x",
  windows: "x.x.x",
};

type TagNode = {
  node: {
    name: string;
  };
};

type VersionTagResponse = {
  refs: {
    edges: TagNode[];
  };
};

// GraphQL response with dynamic keys for each version query
type GraphQLResponse = {
  [key: string]: VersionTagResponse;
};

/**
 * Queries the GitHub GraphQL endpoint for the latest versioned tags of each SDK platform.
 * @returns A map of SDK platforms and their latest tags for each version.
 */
export async function fetchVersions() {
  try {
    if (import.meta.env.PROD) {
      const fetchPromises = Object.entries(versionReplacements).map(
        async ([platform, versions]) => {
          const useSdkSuffix = !["android_adobe_extension"]
            .includes(platform);
          const repoName = `${platform}${useSdkSuffix ? "_sdk" : ""}`;

          if (typeof versions === "object") {
            // For platforms with multiple versions (v4, v5, etc.)
            const versionQueries = Object.keys(versions)
              .map(
                (versionKey) => `
                 ${versionKey}Tags: repository(owner: "adjust", name: "${repoName}") {
                   refs(
                     refPrefix: "refs/tags/"
                     orderBy: { field: TAG_COMMIT_DATE, direction: DESC }
                     first: 1
                     query: "${versionKey}"
                   ) {
                     edges {
                       node {
                         name
                       }
                     }
                   }
                 }
               `,
              )
              .join("\n");

            const query = `
             query RepositoryTags {
               ${versionQueries}
             }
           `;

            const response = await octokit.graphql<GraphQLResponse>(query);

            // Update each version tag in the output map
            Object.keys(versions).forEach((versionKey) => {
              const tag =
                response[`${versionKey}Tags`]?.refs.edges[0]?.node.name.replace(
                  "v",
                  "",
                ) || "Not found";
              (versionReplacements[platform] as MultiVersionTags)[versionKey] =
                tag;
            });
          } else {
            // For platforms with a single latest tag (no version keys like v4, v5)
            const query = `
             query RepositoryTags {
               latestTag: repository(owner: "adjust", name: "${repoName}") {
                 refs(
                   refPrefix: "refs/tags/"
                   orderBy: { field: TAG_COMMIT_DATE, direction: DESC }
                   first: 1
                   query: "v"
                 ) {
                   edges {
                     node {
                       name
                     }
                   }
                 }
               }
             }
           `;

            const response = await octokit.graphql<GraphQLResponse>(query);
            versionReplacements[platform] =
              response.latestTag?.refs.edges[0]?.node.name.replace("v", "") ||
              "x.x.x";
          }
        },
      );

      await Promise.all(fetchPromises);
    }
  } catch (error) {
    console.error("Error fetching versions:", error);
    throw error;
  }

  return versionReplacements;
}
