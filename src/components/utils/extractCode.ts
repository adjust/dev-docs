import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { select, selectAll } from "hast-util-select";
import { toString } from "hast-util-to-string";

import variables from "../../variables.json";

interface CodeExtractionResult {
  code: string;
  lang?: string;
}

interface MyData {
  config: Record<string, any>;
  ids: Record<string, any>;
  event: Record<string, any>;
  adRevenue: Record<string, any>;
  subscription: Record<string, any>;
}

const variableReg = /{variables\.([a-zA-Z0-9_.]+)}/g;

const getValueFromPath = (path: string, obj: MyData) => {
  return path
    .split(".")
    .reduce((acc: any, key: string) => acc?.[key] as string, obj);
};

// This function finds all occurrences of "{variables.<path>}" in the code string
// and replaces them with the corresponding value from the variables object.
const interpolateVariables = (codeString: string) => {
  const isVariableUsed = variableReg.test(codeString);
  if (!isVariableUsed) {
    return codeString;
  }
  return codeString.replace(variableReg, (_, path: string) => {
    const value = getValueFromPath(path, variables);
    // If the value is undefined, keep the original text.
    return value || `{variables.${path}}`;
  });
};

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

  return { code: interpolateVariables(extractedCode), lang };
};
