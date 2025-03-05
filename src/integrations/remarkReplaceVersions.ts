import type { Plugin } from 'unified';
import type { Node } from 'unist';
import type { Code } from 'mdast';
import { visit } from 'unist-util-visit';

const replaceTemplateStringsPlugin: Plugin<[VersionMap]> = (options) => {
   const versionRegex = /\$.*?\_VERSION/g;
   const versions = options || {};

   return (tree: Node | undefined) => {
      if (!tree) return;

      visit(tree, 'code', (node: Code) => {
         if (!node.value || typeof node.value !== 'string' || !node.value.match(versionRegex)) return;

         let newValue = node.value;

         for (const [platform, currentPlatform] of Object.entries(versions)) {
            if (typeof currentPlatform === 'string') {
               const oldValue = new RegExp(`\\$${platform.toUpperCase()}_VERSION`, 'g');
               newValue = newValue.replace(oldValue, currentPlatform);
            } else {
               const v4ReplacementValue = currentPlatform.v4;
               const v5ReplacementValue = currentPlatform.v5;
               const v4OldValue = new RegExp(`\\$${platform.toUpperCase()}_V4_VERSION`, 'g');
               const v5OldValue = new RegExp(`\\$${platform.toUpperCase()}_V5_VERSION`, 'g');
               newValue = newValue.replace(v4OldValue, v4ReplacementValue);
               newValue = newValue.replace(v5OldValue, v5ReplacementValue);
            }
         }

         node.value = newValue;
      });
   };
};

export default replaceTemplateStringsPlugin as Plugin;
