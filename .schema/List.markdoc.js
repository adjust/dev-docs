import markdoc from "@markdoc/markdoc";
const { Tag } = markdoc;

/**
 * A function to transform checkbox markers ([ ] and [x]) into checkboxes
 * @param children The child elements of the list item
 * @returns Updated children with checkboxes added if necessary
 */
function transformListItemChildren(children) {
  return children.flatMap((child, index) => {
    if (typeof child === 'string' && index === 0) {
      if (child.startsWith("[ ]")) {
        return [
          new Tag("input", { type: "checkbox" }, []),
          child.slice(3).trim()
        ];
      } else if (child.startsWith("[x]")) {
        return [
          new Tag("input", { type: "checkbox", checked: "", }, []),
          child.slice(3).trim()
        ];
      }
    } else if (child instanceof Tag) {
      // Recursively call this function on nested lists
      return new Tag(child.name, child.attributes, transformListItemChildren(child.children));
    }

    return child;
  });
}

export const list = {
  children: ['item'],
  attributes: {
    ordered: { type: Boolean, default: false },
    marker: { type: String }
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    // If it's an ordered list, do nothing
    if (attributes.ordered) return new Tag("ol", attributes, children.map(child => new Tag("li", {}, child.children)));

    // If the list is unordered, apply the transformation
    return new Tag("ul", attributes, children.map(child => {
      // Transform each list item
      const listItemChildren = transformListItemChildren(child.children);
      return new Tag("li", {}, listItemChildren);
    }));
  }
};
