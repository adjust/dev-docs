import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { Heading, Link, Text } from "mdast";
import type { Node } from "unist";

function isLinkWithSingleTextChild(node: Node): node is Link {
   return (
      node.type === "link" &&
      (node as Link).children.length === 1 &&
      (node as Link).children[0].type === "text"
   );
}

const remarkHeaderLinkToId: Plugin<[]> = function () {
   return (tree: Node) => {
      visit(tree, "heading", (node: Node) => {
         const headingNode = node as Heading;
         const firstChild = headingNode.children[0];
         if (
            headingNode.children.length === 1 &&
            isLinkWithSingleTextChild(firstChild)
         ) {
            const linkNode = firstChild;
            const textNode = linkNode.children[0] as Text;

            const linkText = textNode.value;
            const linkUrl = linkNode.url;

            if (linkUrl && linkText) {
               headingNode.children = [{ type: "text", value: linkText }];
               headingNode.data ??= {};
               headingNode.data.hProperties = { id: linkUrl };
            }
         }
      });
   };
};

export default remarkHeaderLinkToId;
