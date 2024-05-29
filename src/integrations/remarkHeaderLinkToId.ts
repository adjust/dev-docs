import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { Heading, Link, Text } from 'mdast';
import type { Node } from 'unist';


const remarkHeaderLinkToId: Plugin<[]> = function () {
   return (tree: Node) => {
      visit(tree, 'heading', (node: Heading) => {
         if (
            node.children.length === 1 &&
            node.children[0].type === 'link' &&
            (node.children[0] as Link).children.length === 1 &&
            (node.children[0] as Link).children[0].type === 'text'
         ) {
            const linkNode = node.children[0] as Link;
            const textNode = linkNode.children[0] as Text;

            if (linkNode.url && textNode.value) {
               const linkText = textNode.value;
               node.children = [{ type: 'text', value: linkText }];
               if (!node.data) {
                  node.data = {};
               }
               node.data.hProperties = {
                  id: linkNode.url,
               };
            }
         }
      });
   };
};

export default remarkHeaderLinkToId;
