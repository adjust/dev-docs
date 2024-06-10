import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { Heading, Link, Text } from "mdast";
import type { Node } from "unist";

const isLinkWithSingleTextChild = (node: Node): node is Link =>
   (node as Link).type === "link" &&
   (node as Link).children.length === 1 &&
   (node as Link).children[0].type === "text";

const remarkHeaderLinkToId: Plugin<[]> = function () {
   return (tree: Node) => {
      visit(tree, "heading", (node: Heading) => {
         const firstChild = node.children[0];
         if (node.children.length === 1 && isLinkWithSingleTextChild(firstChild)) {
            const linkNode = firstChild as Link;
            const textNode = linkNode.children[0] as Text;

            const linkText = textNode.value;
            const linkUrl = linkNode.url;

            if (linkUrl && linkText) {
               node.children = [{ type: "text", value: linkText }];
               if (!node.data) {
                  node.data = {};
               }
               node.data.hProperties = { id: linkUrl };
            }
         }
      });
   };
};

export default remarkHeaderLinkToId;
