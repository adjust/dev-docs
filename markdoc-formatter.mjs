import fs from "fs";
import path from "path";
import Markdoc from "@markdoc/markdoc";

/**
 * Format a list of Markdoc (.mdoc) files
 * @param {string[]} files - Array of file paths to format
 */
async function formatMarkdocFiles(files) {
  files.forEach((filePath) => {
    const absolutePath = path.resolve(filePath);

    // Read the file content
    const source = fs.readFileSync(absolutePath, "utf-8");

    // Parse and format using Markdoc
    const ast = Markdoc.parse(source);
    let formatted = Markdoc.format(ast);

    // Write the formatted content back to the file
    fs.writeFileSync(absolutePath, formatted, "utf-8");
  });
}

// Parse command-line arguments and run the formatter
const files = process.argv.slice(2);
formatMarkdocFiles(files).catch((error) => {
  console.error("Error formatting Markdoc files:", error);
  process.exit(1);
});
