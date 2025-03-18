import type { Plugin } from "unified";
import type { Node } from "unist";
import type { Code } from "mdast";
import { visit } from "unist-util-visit";

import type { VersionMap } from "src/declarations";
import variables from "../variables.json";

interface VariablesData {
  config: Record<string, any>;
  ids: Record<string, any>;
  event: Record<string, any>;
  adRevenue: Record<string, any>;
  subscription: Record<string, any>;
}

const variableReg = /\{variables\.([^{}()]+)\}/g;
const indexReg = /\[(\d)\]/;
const versionRegex = /\$.*?\_VERSION/g;

const getValueFromPath = (path: string, obj: VariablesData) => {
  return path.split(".").reduce((acc: any, key: string, index, arr) => {
    // We can't directly access a nested object array property using a string
    // need to extract the object key (newKey) and array index (indexValue) separately.
    if (index === arr.length - 1 && indexReg.test(key)) {
      const newKey = key.replace(indexReg, "");
      // We will always have the index as existing for the array index was checked before
      const indexValue = indexReg.exec(key)![1];
      return acc?.[newKey][indexValue] as string;
    }
    return acc?.[key] as string;
  }, obj);
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

const interpolateVersions = (codeString: string, versions: VersionMap) => {
  const isVersionUsed = versionRegex.test(codeString);
  if (!isVersionUsed) {
     return codeString;
   }
   let newValue = codeString;

  for (const [platform, currentPlatform] of Object.entries(versions)) {
   if (typeof currentPlatform === "string") {
     const oldValue = new RegExp(
       `\\$${platform.toUpperCase()}_VERSION`,
       "g",
     );
     newValue = newValue.replace(oldValue, currentPlatform);
   } else {
     const v4ReplacementValue = currentPlatform.v4;
     const v5ReplacementValue = currentPlatform.v5;
     const v4OldValue = new RegExp(
       `\\$${platform.toUpperCase()}_V4_VERSION`,
       "g",
     );
     const v5OldValue = new RegExp(
       `\\$${platform.toUpperCase()}_V5_VERSION`,
       "g",
     );
     newValue = newValue.replace(v4OldValue, v4ReplacementValue);
     newValue = newValue.replace(v5OldValue, v5ReplacementValue);
   }
 }

 return newValue;
};

const replaceTemplateStringsPlugin: Plugin<[VersionMap]> = (options) => {
  const versions = options || {};

  return (tree: Node | undefined) => {
    if (!tree) return;

    visit(tree, "code", (node: Code) => {
      if (
        !node.value ||
        typeof node.value !== "string"
      )
        return;

      let newValue = node.value;

      newValue = interpolateVersions(newValue, versions);
      newValue = interpolateVariables(newValue);

      node.value = newValue;
    });
  };
};

export default replaceTemplateStringsPlugin as Plugin;
