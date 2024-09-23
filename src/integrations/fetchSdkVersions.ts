import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

let versionReplacements: VersionMap = {
  android: {
    v4: "vx.x.x",
    v5: "vx.x.x",
  },
  ios: {
    v4: "vx.x.x",
    v5: "vx.x.x",
  },
  unity: {
    v4: "vx.x.x",
    v5: "vx.x.x",
  },
  react_native: {
    v4: "vx.x.x",
    v5: "vx.x.x",
  },
  cordova: {
    v4: "vx.x.x",
    v5: "vx.x.x",
  },
  flutter: {
    v4: "vx.x.x",
    v5: "vx.x.x",
  },
  web: "vx.x.x",
  windows: "vx.x.x",
};

export async function fetchVersions() {
  try {
    if (import.meta.env.PROD) {
      const fetchPromises = Object.keys(versionReplacements).map(
        async (platform) => {
          const currentPlatform = versionReplacements[platform];
          if (typeof currentPlatform === "object") {
            const response = await octokit.request(
              "GET /repos/{owner}/{repo}/releases",
              {
                owner: "adjust",
                repo: `${platform}_sdk`,
                per_page: 5,
              },
            );
            let firstV4Release = "";
            let firstV5Release = "";

            for (const release of response.data) {
              if (!firstV4Release && release.tag_name.startsWith("v4")) {
                firstV4Release = release.tag_name;
              }
              if (!firstV5Release && release.tag_name.startsWith("v5")) {
                firstV5Release = release.tag_name;
              }
              if (firstV4Release && firstV5Release) {
                break;
              }
            }

            currentPlatform.v4 = firstV4Release;
            currentPlatform.v5 = firstV5Release;
          } else {
            const response = await octokit.request(
              "GET /repos/{owner}/{repo}/releases/latest",
              {
                owner: "adjust",
                repo: `${platform}_sdk`,
              },
            );
            versionReplacements[platform] = response.data.tag_name;
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
