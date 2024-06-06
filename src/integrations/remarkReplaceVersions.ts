import type { Plugin } from 'unified';
import type { Node } from 'unist';
import type { Code } from 'mdast';
import { visit } from 'unist-util-visit';

const replaceTemplateStringsPlugin: Plugin<[VersionMap]> = (options) => {
   const versionRegex = /\$.*?\_VERSION/g
   const versions = options || {};

   return (tree: Node | undefined) => {
      if (!tree) return;
      visit(tree, 'code', (node: Code) => {
         if (!node || !node.value || typeof node.value !== 'string' || !node.value.match(versionRegex)) return;

         let newValue = node.value;

         for (const platform in versions) {
            const currentPlatform = versions[platform];

            if (typeof currentPlatform === 'string') {
               const replacementValue = currentPlatform.substring(1); // Remove leading "v"
               const oldValue = `$${platform.toUpperCase()}_VERSION`;
               newValue = newValue.replaceAll(oldValue, replacementValue);
            } else {
               const v4ReplacementValue = currentPlatform.v4.substring(1); // Remove leading "v"
               const v5ReplacementValue = currentPlatform.v5.substring(1); // Remove leading "v"
               const v4OldValue = `$${platform.toUpperCase()}_V4_VERSION`;
               const v5OldValue = `$${platform.toUpperCase()}_V5_VERSION`;
               newValue = newValue.replaceAll(v4OldValue, v4ReplacementValue);
               newValue = newValue.replaceAll(v5OldValue, v5ReplacementValue);
            }
         }
         node.value = newValue;
      });
   };
};

export default replaceTemplateStringsPlugin as Plugin;
