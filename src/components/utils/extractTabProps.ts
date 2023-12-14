import { rehype } from "rehype";
import { visit } from "unist-util-visit";

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
          if (node.properties.dataType == "tab") {
            const { properties } = node;

            tabItems.push({
              id: properties.id,
              sync: properties.dataSync,
              iconName: properties.dataIcon,
              label: properties.title,
            });
          }
        });
      };
    })
    .process(content);

  return { tabs: tabItems, updatedContent: data.value as string };
};
