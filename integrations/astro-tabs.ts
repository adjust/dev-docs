import type { AstroIntegration } from "astro";
import type * as mdast from "mdast";
import remarkDirective from "remark-directive";
import type * as unified from "unified";
import { remove } from "unist-util-remove";
import { visit } from "unist-util-visit";
import { visitChildren } from "unist-util-visit-children";
import { makeComponentNode } from "./utils/makeComponentNode";

const TabsTagname = "AutoImportedAstroTabs";
const TabNameTagname = "AutoImportedAstroTabName";
const TabContentTagname = "AutoImportedAstroTabContent";
export const tabsAutoImport: Record<string, [string, string][]> = {
  "@components/AstroTabs/AstroTabs.astro": [["default", TabsTagname]],
};
export const tabNameAutoImport: Record<string, [string, string][]> = {
  "@components/AstroTabs/AstroTabName.astro": [["default", TabNameTagname]],
};
export const tabContentAutoImport: Record<string, [string, string][]> = {
  "@components/AstroTabs/AstroTabContent.astro": [
    ["default", TabContentTagname],
  ],
};

/**
 * remark plugin that converts blocks delimited with `:::tabs` into instances of
 * the `<Tabs>` component. Depends on the `remark-directive` module for the
 * core parsing logic.
 */
const remarkTabs = (): unified.Plugin<[], mdast.Root> => {
  const variants = new Set(["tabs"]);

  const transformer: unified.Transformer<mdast.Root> = (tree) => {
    // @ts-expect-error Possibly infinite type instantiation we can’t do anything about.
    visit(tree, (node, index, parent) => {
      if (!parent || index === null || node.type !== "containerDirective")
        return;
      const type = node.name;
      if (!variants.has(type)) return;

      // remark-directive converts a container’s “label” to a paragraph in
      // its children, but we want to pass it as the title prop to <Tabs>, so
      // we iterate over the children, find a directive label, store it for the
      // title prop, and remove the paragraph from children.
      let title: string | undefined;

      remove(node, (child) => {
        if (child.data?.directiveLabel) {
          if ("children" in child && "value" in child?.children[0]) {
            title = child?.children[0].value;
          }
          return true;
        }
      });

      // finding all leaves and changing default children by this Node
      let tabCount = 0;
      const visitChild = visitChildren((child, index) => {
        if (child?.type === "leafDirective" && child?.name === "title") {
          if ("children" in child && "value" in child?.children[0]) {
            tabCount += 1;
            const tabContentNode = makeComponentNode(
              TabContentTagname,
              {
                attributes: {
                  title: child?.children[0].value,
                  name: "tabcontent",
                },
              },
              ...node.children[index].children
            );
            const tabNameNode = makeComponentNode(TabNameTagname, {
              attributes: {
                title: child?.children[0].value,
                name: "tabname",
                slotName: `tab.${tabCount}`,
              },
              ...[],
            });
            node.children.splice(
              index,
              1,
              { ...tabContentNode },
              { ...tabNameNode }
            );
          }
        }
      });
      visitChild(node);

      // Replace this node with the tabs component it represents.
      parent.children[index] = makeComponentNode(
        TabsTagname,
        { attributes: { type, title } },
        ...node.children
      );
    });
  };

  return function attacher() {
    return transformer;
  };
};

/**
 * Astro integration that sets up the remark plugin and auto-imports the `<Tabs>` component everywhere.
 */
export function astroTabs(): AstroIntegration {
  return {
    name: "@astrojs/tabs",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          markdown: {
            remarkPlugins: [remarkDirective, remarkTabs()],
          },
        });
      },
    },
  };
}
