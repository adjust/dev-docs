import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

type TagNode = {
  node: {
    name: string;
  };
};

// Define the shape of a single version tag response
type VersionTagResponse = {
  refs: {
    edges: TagNode[];
  };
};

// Make the GraphQL response flexible to handle different version keys (v2, v3, etc.)
type GraphQLResponse = {
  [key: string]: VersionTagResponse;
};

let versionReplacements: VersionMap = {
  android: { v4: "x.x.x", v5: "x.x.x" },
  ios: { v4: "x.x.x", v5: "x.x.x" },
  unity: { v4: "x.x.x", v5: "x.x.x" },
  react_native: { v4: "x.x.x", v5: "x.x.x" },
  cordova: { v4: "x.x.x", v5: "x.x.x" },
  flutter: { v4: "x.x.x", v5: "x.x.x" },
  cocos2dx: { v4: "x.x.x", v5: "x.x.x" },
  android_adobe_extension: {
    v2: "x.x.x",
    v3: "x.x.x",
  },
  web: "x.x.x",
  windows: "x.x.x",
};

/**
 * Queries the GitHub GraphQL endpoint for the latest versioned tag of each platform
 * @returns A VersionMap of the latest versions of each SDK
 */
export async function fetchVersions() {
  try {
    if (import.meta.env.PROD) {
      const fetchPromises = Object.keys(versionReplacements).map(
        async (platform) => {
          const currentPlatform = versionReplacements[platform];

          if (typeof currentPlatform === "object") {
            // Dynamically build query segments for each version (e.g., v2, v3, v4, v5)
            const versionQueries = Object.keys(currentPlatform)
              .map(
                (versionKey) => `
                ${versionKey}Tags: repository(owner: "adjust", name: "${platform}_sdk") {
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

            // Build the full query with all versions for this platform
            const query = `
            query RepositoryTags {
              ${versionQueries}
            }
          `;

            const response = await octokit.graphql<GraphQLResponse>(query);

            // Extract and store each version's tag name from the response
            Object.keys(currentPlatform).forEach((versionKey) => {
              const tag =
                response[`${versionKey}Tags`]?.refs.edges[0]?.node.name.replace(
                  "v",
                  "",
                ) || "Not found";
              currentPlatform[versionKey] = tag;
            });
          } else {
            // For non-object platforms, fetch only the latest tag
            const query = `
            query RepositoryTags {
              latestTag: repository(owner: "adjust", name: "${platform}_sdk") {
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
              "Not found";
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
