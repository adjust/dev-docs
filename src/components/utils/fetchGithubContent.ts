/*
This function takes the information parsed by the getInfoFromUrl function and makes an authenticated call to the GitHub API.
The content of the response is a Base64-encoded version of the file specified. This function decodes the information before returning it.
*/

type GitHubContent = Omit<ApiObject, "range">;
const token: string | undefined = import.meta.env.GITHUB_TOKEN;

if (!token) {
  throw new Error(
    `Missing GitHub API token. Check the .env.sample file for information.`,
  );
}

export async function fetchGithubContent(repoInfo: GitHubContent) {
  const baseURL = `https://api.github.com/repos/${repoInfo.orgName}/${repoInfo.repoName}/contents/${repoInfo.file}?ref=${repoInfo.ref}`;
  const response = await fetch(baseURL, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  }).catch((err) => {
    throw new Error(`Error fetching content from ${baseURL}. ${err}`);
  });

  if (!response.ok) {
    throw new Error(`Response status from ${baseURL}: ${response.status}`);
  }

  let body = await response.json();
  // Decode Base64-encoded body and return it
  return atob(body.content);
}
