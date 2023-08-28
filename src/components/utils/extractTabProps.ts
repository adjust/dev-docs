import { rehype } from "rehype";
import { visit } from "unist-util-visit";
import { remove } from "unist-util-remove";

import type { TabItemType } from "@adjust/components/build/Tabs/TabItem";
import type { Node } from "unist";

interface TreeNode extends Node {
  tagName: string;
  properties: Record<string, any>;
  children: { type: string; value: string }[];
}

export const extractTabProps = async (content: string) => {
  const tabItems: TabItemType[] = [];

  const data = await rehype()
    .use(() => {
      return (tree) => {
        visit(tree, "element", (node: TreeNode) => {
          if (node.tagName == "h3") {
            const { properties, children } = node;
            tabItems.push({
              id: properties.id!,
              iconName: properties.dataIcon,
              label: children[0].value,
            });

            remove(node);
          }
        });
      };
    })
    .process(content);

  return { tabs: tabItems, updatedContent: data.value as string };
};
