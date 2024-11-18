import { rehype } from "rehype";
import { visit } from "unist-util-visit";
import type { Node } from "unist";

interface TreeNode extends Node {
  tagName: string;
  properties: {
    id: string;
    dataSync: string;
    dataIcon: string;
    title: string;
    [key: string]: any;
  };
  children: { type: string; value: string }[];
}

interface TabItem {
  id: string;
  sync: string;
  iconName: string;
  label: string;
}

export const extractTabProps = async (
  content: string,
): Promise<{ tabs: TabItem[]; updatedContent: string }> => {
  const tabItems: TabItem[] = [];

  const data = await rehype()
    .use(() => (tree) => {
      visit(tree, "element", (node: TreeNode) => {
        if (node.properties.dataType === "tab") {
          const { id, dataSync, dataIcon, title } = node.properties;

          tabItems.push({
            id,
            sync: dataSync,
            iconName: dataIcon,
            label: title,
          });
        }
      });
    })
    .process(content);

  return { tabs: tabItems, updatedContent: data.value.toString() };
};
