import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

let versionReplacements: VersionMap = {
   "android": {
      "v4": "vx.x.x",
      "v5": "vx.x.x",
   },
   "ios": {
      "v4": "vx.x.x",
      "v5": "vx.x.x"
   },
   "flutter": "vx.x.x",
   "react_native": "vx.x.x",
   "unity": "vx.x.x",
   "web": "vx.x.x",
   "windows": "vx.x.x"
};

export async function fetchVersions() {
   if (import.meta.env.PROD) {
      const fetchPromises = Object.keys(versionReplacements).map(async (platform) => {
         const currentPlatform = versionReplacements[platform];
         if (typeof currentPlatform === "object") {
            const response = await octokit.request("GET /repos/{owner}/{repo}/releases", {
               owner: "adjust",
               repo: `${platform}_sdk`,
               per_page: 5
            });
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

            const currentPlatform = versionReplacements[platform];
            currentPlatform.v4 = firstV4Release;
            currentPlatform.v5 = firstV5Release;
         } else {
            const response = await octokit.request("GET /repos/{owner}/{repo}/releases/latest", {
               owner: "adjust",
               repo: `${platform}_sdk`,
            });
            versionReplacements[platform] = response.data.tag_name;
         }
      });

      await Promise.all(fetchPromises);
   }
   return versionReplacements;
}
