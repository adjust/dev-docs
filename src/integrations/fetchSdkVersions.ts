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
  android: { versions: { v4: "x.x.x", v5: "x.x.x" }, useSdkSuffix: true },
  ios: { versions: { v4: "x.x.x", v5: "x.x.x" }, useSdkSuffix: true },
  unity: { versions: { v4: "x.x.x", v5: "x.x.x" }, useSdkSuffix: true },
  react_native: { versions: { v4: "x.x.x", v5: "x.x.x" }, useSdkSuffix: true },
  cordova: { versions: { v4: "x.x.x", v5: "x.x.x" }, useSdkSuffix: true },
  flutter: { versions: { v4: "x.x.x", v5: "x.x.x" }, useSdkSuffix: true },
  cocos2dx: { versions: { v4: "x.x.x", v5: "x.x.x" }, useSdkSuffix: true },
  android_adobe_extension: {
    versions: { v2: "x.x.x", v3: "x.x.x" },
    useSdkSuffix: false,
  },
  web: { versions: "x.x.x", useSdkSuffix: true },
  windows: { versions: "x.x.x", useSdkSuffix: true },
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
          const { versions, useSdkSuffix } = versionReplacements[platform];
          const repoName = `${platform}${useSdkSuffix ? "_sdk" : ""}`;

          if (typeof versions === "object") {
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

            Object.keys(versions).forEach((versionKey) => {
              const tag =
                response[`${versionKey}Tags`]?.refs.edges[0]?.node.name.replace(
                  "v",
                  "",
                ) || "Not found";
              versions[versionKey] = tag;
            });
          } else {
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
            versionReplacements[platform].versions =
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
