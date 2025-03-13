import fs from "fs/promises";
import yaml from "js-yaml";
import { exec, execSync } from "child_process";

const MDX_TAGS = [
  "Accordion",
  "Callout",
  "CodeBlock",
  "MinorVersion",
  "Tabs",
  "Tab",
  "ListColumns",
];

// Define the base MDOC tags, and dynamically generate opening and closing variants
const BASE_MDOC_TAGS = [
  "tabs",
  "tab",
  "deflist",
  "minorversion",
  "codeblock",
  "listcolumns",
  "accordion",
  "callout",
];
const MDOC_TAGS = BASE_MDOC_TAGS.flatMap((tag) => [tag, `/${tag}`]);

const locales = ["ja", "ko", "zh"];
const TAG_LIST = MDX_TAGS.join("|");

// Helper function to split the front matter (YAML) from content
function splitFrontMatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\n---\r?\n([\s\S]*)/);

  if (match) {
    return [match[1], match[2]];
  }
  return ["", content];
}

// Fix the YAML front matter
function fixFrontMatter(frontMatter, locale) {
  if (frontMatter.slug && frontMatter.slug.startsWith("en/")) {
    frontMatter.slug = `${locale}/${frontMatter.slug.slice(3)}`;
  }

  if (frontMatter.redirects) {
    for (const version in frontMatter.redirects) {
      if (frontMatter.redirects[version].startsWith("/en/")) {
        frontMatter.redirects[version] =
          `/${locale}/${frontMatter.redirects[version].slice(4)}`;
      }
    }
  }

  return frontMatter;
}

// Remove escape slashes from tags
function removeEscapeSlashesFromTags(content) {
  return content.replace(/\\(?=[-#])/g, "");
}

// Add newline after closing tags
function addNewlineAfterClosingTags(content, tags) {
  const tagList = tags.join("|");
  const regex = new RegExp(
    `(\\S)(\\s*{%\\s*/(?:${tagList})\\s*%})(?!\\n)`,
    "g",
  );
  return content.replace(regex, "$1\n$2");
}

function fixHeaders(content) {
  const headerRegex = /^(\s*#+\s.*?)(\\{\\#.*?\\})/gm;
  return content.replace(
    headerRegex,
    (match, p1, p2) => p1 + p2.replace(/\\/g, ""),
  );
}

// Fix MDX content
function fixMdxContent(content, locale) {
  // Fix tags to ensure correct casing
  for (const tag of MDX_TAGS) {
    const lowercaseTag = tag.toLowerCase();
    const regex = new RegExp(`<(${lowercaseTag})`, "g");
    content = content.replace(regex, `<${tag}`);
  }

  // Fix broken unescaped angle brackets in Japanese content
  if (locale === "ja") {
    content = content.replace(/（<）/g, "（\\<）");
  }

  // Ensure newline between any two tags on the same line
  const tagRegex = new RegExp(
    `(<[^<>]*\\/?(?:${TAG_LIST})[^<>]*>)(\\s*)(<[^<>]*\\/?(?:${TAG_LIST})[^<>]*>)`,
    "g",
  );
  content = content.replace(tagRegex, "$1\n$3");
  content = fixHeaders(content);

  // Fix escaped headers
  const headerRegex = /^(\s.*?)(\\{#.*?\\})/gm;
  content = content.replace(
    headerRegex,
    (match, p1, p2) => p1 + p2.replace(/\\/g, ""),
  );

  // Update URLs
  content = content.replace(
    /https:\/\/help\.adjust\.com\/en\//g,
    `https://help.adjust.com/${locale}/`,
  );
  content = content.replace(/\(\/en\/(.*?)\)/g, `(/${locale}/$1)`);

  // Remove unnecessary IDs
  content = content.replace(/ id="sl-md0000000"/g, "");
  content = content.replace(/\s?md0000000\s?/g, "");

  return content;
}

// Fix mdoc content
function fixMdocContent(content, locale) {
  // Unescape escaped curly braces
  content = content.replace(/\\{%(.*?)%\\}/g, "{%$1%}");
  content = fixHeaders(content);

  content = removeEscapeSlashesFromTags(content);

  content = addNewlineAfterClosingTags(content, MDOC_TAGS);

  // Update URLs
  content = content.replace(
    /https:\/\/help\.adjust\.com\/en\//g,
    `https://help.adjust.com/${locale}/`,
  );
  content = content.replace(/\(\/en\/(.*?)\)/g, `(/${locale}/$1)`);

  // Add newline between two adjacent opening tags
  content = content.replace(/(%}\s*)({%\s*[^%]+%})/g, "$1\n$2");

  // Add newline between two adjacent closing tags
  content = content.replace(/(%}\s*)({%\s*\/[^%]+%})/g, "$1\n$2");

  return content;
}

const modifiedFiles = [];

// Get the list of modified files in the current PR
function getModifiedFiles() {
  const output = execSync("git diff --name-only HEAD~1", { encoding: "utf-8" });
  return output.split("\n").filter((file) => file.trim() !== "");
}

// Format MDX files using Prettier
async function formatMdxFile(file) {
  return new Promise((resolve, reject) => {
    exec(`npx prettier --write ../../${file}`, (error, stdout, stderr) => {
      if (error) return reject(stderr);
      console.log(stdout);
      resolve();
    });
  });
}

// Format MDOC files using the custom formatter
async function formatMdocFile(file) {
  return new Promise((resolve, reject) => {
    exec(
      `node ../../markdoc-formatter.mjs ../../${file}`,
      (error, stdout, stderr) => {
        if (error) return reject(stderr);
        console.log(stdout);
        resolve();
      },
    );
  });
}

// Process a single file
async function processFile(file, locale) {
  console.log(`Processing ${file} for ${locale}`);
  const originalContent = await fs.readFile(`../../${file}`, "utf-8");
  const [frontMatterYaml, fileContent] = splitFrontMatter(originalContent);

  const frontMatter = yaml.load(frontMatterYaml);
  const updatedFrontMatter = fixFrontMatter(frontMatter, locale);

  let updatedContent;
  if (file.endsWith(".mdx")) {
    updatedContent = fixMdxContent(fileContent, locale);
  }

  const finalContent = `---\n${yaml.dump(updatedFrontMatter, { noRefs: true })}---\n${updatedContent}`;

  if (finalContent !== originalContent) {
    await fs.writeFile(`../../${file}`, finalContent, "utf-8");
    modifiedFiles.push(file);

    // Format the file after writing changes
    if (file.endsWith(".mdx")) {
      await formatMdxFile(file);
    }
  }
}

// Main function to process only modified files
async function main() {
  const files = getModifiedFiles();
  console.log("Modified files:", files);

  for (const locale of locales) {
    const relevantFiles = files.filter(
      (file) =>
        file.startsWith(`src/content/docs/${locale}/`) &&
        (file.endsWith(".mdx")),
    );

    for (const file of relevantFiles) {
      await processFile(file, locale);
    }
  }

  if (modifiedFiles.length > 0) {
    console.log("Processed files:", modifiedFiles.join(", "));
  } else {
    console.log("No relevant files were modified.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
