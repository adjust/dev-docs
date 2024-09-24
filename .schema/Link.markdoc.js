import markdoc from "@markdoc/markdoc"
const { Tag } = markdoc;

function addIcon(href) {
  if (!href.startsWith("http")) {
    return;
  }

  return new Tag(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      height: 16,
      width: 16,
      style: "margin-bottom:0.35rem;margin-left:0.15rem;margin-right:0.15rem;display:inline-block;",
    },
    [
      new Tag("use", {
        href: "#external-link"
      })
    ]
  );
}

export const link = {
  children: ["inline"],
  attributes: {
    href: { type: String },
    title: { type: String },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    // Create the link with SVG icon
    const icon = addIcon(attributes.href);

    // Append the link to the heading"s children
    return new Tag(
      "a",
      { ...attributes },
      [...children, icon] // Append the link to the children
    );
  }
};

