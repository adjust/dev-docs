import { Octokit } from "@octokit/core";

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

/**
 * Parses a file URL and returns its component parts
 * @param fileUrl
 * @returns The component parts of the URL for use in a GraphQL query
 */
function parsePermalink(fileUrl: string) {
   const regex =
      /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/;
   const match = fileUrl.match(regex);
   if (!match) {
      throw new Error("Invalid file URL format.");
   }

   const [, owner, repo, branch, filePath] = match;

   const filename = filePath.split("/").pop()!;

   return { owner, repo, branch, filePath, filename };
}

/**
 * Fetches the text content of a file from GitHub
 * @param fileUrl
 * @returns The file name and contents
 */
export async function fetchExampleApp(
   fileUrl: string,
): Promise<{ code: string; title: string }> {
   const { owner, repo, branch, filePath, filename } = parsePermalink(fileUrl);

   const query = `
     query($owner: String!, $repo: String!, $expression: String!) {
       repository(owner: $owner, name: $repo) {
         object(expression: $expression) {
           ... on Blob {
             text
           }
         }
       }
     }
   `;

   const expression = `${branch}:${filePath}`;

   const variables = { owner, repo, expression };

   try {
      const response = await octokit.graphql<
         { repository: { object: { text: string } } }
      >(query, variables);

      if (!response.repository.object) {
         throw new Error("File not found in the repository.");
      }

      const { text: code } = response.repository.object;
      return { code, title: filename };
   } catch (error) {
      throw new Error(
         `Failed to fetch file content: ${(error as Error).message}`,
      );
   }
}
