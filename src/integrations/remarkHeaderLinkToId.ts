import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { Heading, Link, PhrasingContent } from "mdast";
import type { Node } from "unist";

function isLinkWithChildren(node: Node): node is Link {
   return node.type === "link";
}

const remarkHeaderLinkToId: Plugin<[]> = function () {
   return (tree: Node) => {
      visit(tree, "heading", (node: Node) => {
         const headingNode = node as Heading;
         const firstChild = headingNode.children[0];
         if (
            headingNode.children.length === 1 &&
            isLinkWithChildren(firstChild)
         ) {
            const linkNode = firstChild;
            const linkChildren = linkNode.children;

            const linkUrl = linkNode.url;

            if (linkUrl && linkChildren.length > 0) {
               headingNode.children = linkChildren as PhrasingContent[];
               headingNode.data ??= {};
               headingNode.data.hProperties = { id: linkUrl };
            }
         }
      });
   };
};

export default remarkHeaderLinkToId;
