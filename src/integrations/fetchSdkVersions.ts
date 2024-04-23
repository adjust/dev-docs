import { Octokit } from "octokit";

const octokit = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

let versionReplacements: VersionMap = {
   "android": "vx.x.x",
   "flutter": "vx.x.x",
   "ios": "vx.x.x",
   "react_native": "vx.x.x",
   "unity": "vx.x.x",
   "web": "vx.x.x",
   "windows": "vx.x.x"
}

export async function fetchVersions() {
   if (import.meta.env.PROD) {
      for (const platform in versionReplacements) {
         await octokit.request(`GET /repos/adjust/${platform}_sdk/releases/latest`).then((response) => {
            versionReplacements[platform] = response.data.tag_name
         })
      }
   }
   return versionReplacements
}
