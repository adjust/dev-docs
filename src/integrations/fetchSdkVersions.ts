import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

type TagNode = {
  node: {
    name: string;
  };
};

// Define the shape of the GraphQL response
type GraphQLResponse = {
  v4Tags: {
    refs: {
      edges: TagNode[];
    };
  };
  v5Tags: {
    refs: {
      edges: TagNode[];
    };
  };
  latestTag?: {
    refs: {
      edges: TagNode[];
    };
  };
};

let versionReplacements: VersionMap = {
  android: { v4: "vx.x.x", v5: "vx.x.x" },
  ios: { v4: "vx.x.x", v5: "vx.x.x" },
  unity: { v4: "vx.x.x", v5: "vx.x.x" },
  react_native: { v4: "vx.x.x", v5: "vx.x.x" },
  cordova: { v4: "vx.x.x", v5: "vx.x.x" },
  flutter: { v4: "vx.x.x", v5: "vx.x.x" },
  cocos2dx: { v4: "vx.x.x", v5: "vx.x.x" },
  web: "vx.x.x",
  windows: "vx.x.x",
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
            const query = `
              query RepositoryTags {
                v4Tags: repository(owner: "adjust", name: "${platform}_sdk") {
                  refs(
                    refPrefix: "refs/tags/"
                    orderBy: { field: TAG_COMMIT_DATE, direction: DESC }
                    first: 1
                    query: "v4"
                  ) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
                v5Tags: repository(owner: "adjust", name: "${platform}_sdk") {
                  refs(
                    refPrefix: "refs/tags/"
                    orderBy: { field: TAG_COMMIT_DATE, direction: DESC }
                    first: 1
                    query: "v5"
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

            // Extract the first v4 and v5 tag names
            const firstV4Tag = response.v4Tags.refs.edges[0]?.node.name || "Not found";
            const firstV5Tag = response.v5Tags.refs.edges[0]?.node.name || "Not found";

            currentPlatform.v4 = firstV4Tag;
            currentPlatform.v5 = firstV5Tag;
          } else {
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
            versionReplacements[platform] = response.latestTag?.refs.edges[0]?.node.name || "Not found";
          }
        }
      );

      await Promise.all(fetchPromises);
    }
  } catch (error) {
    console.error("Error fetching versions:", error);
    throw error;
  }

  return versionReplacements;
}
