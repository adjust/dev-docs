/* This function takes a string URL and extracts the useful data from it:
* orgName: The name of the user or organization that owns the repository
* repoName: The name of the repository
* ref: The commit hash of the repository. Used to ensure that this information only changes when we update it
* file: The file containing the code we want to present
* range: The range of lines that contain the code

Given the following URL:
* https://github.com/adjust/ios_sdk/blob/76c95522216f0ac0a583954feb67f016d8955211/Adjust/Adjust.m#L250-L254

This function returns

{
  orgName: "adjust",
  repoName: "ios_sdk",
  ref: "76c95522216f0ac0a583954feb67f016d8955211",
  file: "Adjust/Adjust.m",
  range: "250-254"
}
*/

export function getInfoFromUrl(repoLink: string): ApiObject {
  let link = repoLink.replace("https://github.com/", "");
  let words = link.split(/[/#]/);
  let file = words.slice(4, -1).join("/");
  let range = words[words.length - 1].replaceAll("L", "");
  return {
    orgName: words[0],
    repoName: words[1],
    ref: words[3],
    file: file,
    range: range,
  };
}
