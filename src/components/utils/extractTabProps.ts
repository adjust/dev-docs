import { rehype } from "rehype";
import { visit } from "unist-util-visit";
import { remove } from "unist-util-remove";

import type { Node } from "unist";
import type { TabItem } from "@components/atlas/BuildTabs";

interface TreeNode extends Node {
  tagName: string;
  properties: Record<string, any>;
  children: { type: string; value: string }[];
}

export const extractTabProps = async (content: string) => {
  const tabItems: TabItem[] = [];

  const data = await rehype()
    .use(() => {
      return (tree) => {
        visit(tree, "element", (node: TreeNode) => {
          if (node.tagName == "h3") {
            const { properties, children } = node;

            tabItems.push({
              id: properties.id,
              sync: properties.dataSync,
              iconName: properties.dataIcon,
              label: children[0].value,
            });

            remove(tree, node);
          }
        });
      };
    })
    .process(content);

  return { tabs: tabItems, updatedContent: data.value as string };
};
