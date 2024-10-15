import markdoc from "@markdoc/markdoc";
const { Tag } = markdoc;

/**
 * A function to convert string email addresses into links
 * @param email An email address
 * @returns A new mailto link now
 */
function createMailtoLink(email) {
  return new Tag(
    "a",
    {
      href: `mailto:${email}`,
    },
    [email]
  );
}

/**
 * A function to go through paragraph nodes and split out any email addresses
 * to update into links
 * @param children
 * @returns Transformed nodes
 */
function transformTextNodes(children) {
  return children.flatMap(child => {
    if (typeof child === 'string') {
      // Replace emails in plain text nodes
      return child.split(/(\s+)/).map(part => {
        // Split the text on spaces and handle each part separately
        const emailMatch = part.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
        if (emailMatch) {
          // If an email address is found, create a mailto link
          return createMailtoLink(emailMatch[0]);
        }
        // Return other text parts unchanged
        return part;
      });
    } else if (child instanceof Tag) {
      // Recursively transform child tags
      return new Tag(child.name, child.attributes, transformTextNodes(child.children));
    }
    // For other cases, just return the child as is
    return child;
  });
}

export const paragraph = {
  children: ["inline"],
  attributes: {},
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const transformedChildren = transformTextNodes(children);
    return new Tag("p", { ...attributes }, transformedChildren);
  }
};
