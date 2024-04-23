import { Octokit } from "octokit";

const octokit = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

let versionReplacements: VersionMap = {
   "android": "android_sdk_version",
   "flutter": "flutter_sdk_version",
   "ios": "ios_sdk_version",
   "react_native": "react_native_sdk_version",
   "unity": "unity_sdk_version",
   "web": "web_sdk_version",
   "windows": "windows_sdk_version"
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
