import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { select, selectAll } from "hast-util-select";
import { toString } from "hast-util-to-string";

interface CodeExtractionResult {
  code: string;
  lang?: string;
}

export const extractCodeFromHTML = async (
  htmlString: string,
): Promise<CodeExtractionResult> => {
  const processor = unified().use(rehypeParse, { fragment: true });
  const ast = processor.parse(htmlString);

  const preElement = select("pre[data-language]", ast);
  const lang = preElement
    ? (preElement.properties["dataLanguage"] as string)
    : "";

  const codeBlocks = selectAll(".ec-line .code", ast);

  // Handle extraction with explicit newline handling
  const extractedCode = codeBlocks.reduce((acc, block, index) => {
    const text = toString(block);
    if (index > 0 && text.trim() !== "") {
      return acc + "\n" + text;
    }
    return acc + text;
  }, "");

  return { code: extractedCode, lang };
};
