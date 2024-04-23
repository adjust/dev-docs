import type { Plugin } from 'unified';
import type { Node } from 'unist';
import type { Code } from 'mdast';
import { visit } from 'unist-util-visit';

const replaceTemplateStringsPlugin: Plugin<[VersionMap]> = (options) => {
   const versions = options || {};

   return (tree: Node | undefined) => {
      if (!tree) return;
      visit(tree, 'code', (node: Code) => {
         if (!node || !node.value || typeof node.value !== 'string') return;

         let newValue = node.value;
         for (const platform in versions) {
            const replacementValue = versions[platform].substring(1);
            const oldValue = `$${platform.toUpperCase()}_VERSION`
            newValue = newValue.replaceAll(oldValue, replacementValue);
         }
         node.value = newValue;
      });
   };
};


export default replaceTemplateStringsPlugin as Plugin;
