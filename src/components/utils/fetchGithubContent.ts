/*
This function takes the information parsed by the getInfoFromUrl function and makes an authenticated call to the GitHub API.
The content of the response is a Base64-encoded version of the file specified. This function decodes the information before returning it.
*/

type GitHubContent = Omit<ApiObject, "range">;

export async function fetchGithubContent(repoInfo: GitHubContent) {
  const baseURL = `https://api.github.com/repos/${repoInfo.orgName}/${repoInfo.repoName}/contents/${repoInfo.file}?ref=${repoInfo.ref}`;
  const response = await fetch(baseURL, {
    method: "GET",
    headers: { Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}` },
  }).catch((err) => {
    throw new Error(`Error fetching content from ${baseURL}. ${err}`);
  });

  if (!response.ok) {
    throw new Error(`Response status from ${baseURL}: ${response.status}`);
  }

  let body = await response.json();
  // Content body from github is base64 encoded
  return atob(body.content);
}
