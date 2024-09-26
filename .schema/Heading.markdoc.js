import markdoc from "@markdoc/markdoc"
const { Tag } = markdoc;

function createLink(attributes) {
  if (!attributes.id) {
    return null;
  }

  const svg = new Tag(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      height: 24,
      width: 24,
      viewBox: "0 0 24 24",
      fill: "currentColor",
    },
    [
      new Tag("path", {
        fillRule: "evenodd",
        d: "M8.464 10.793a.5.5 0 00-.707 0l-1.68 1.68c-1.19 1.19-1.298 3.12-.17 4.248l.943.942c1.155 1.155 3.031.905 4.19-.254l1.667-1.667a.5.5 0 10-.707-.707l-1.666 1.667c-.879.878-2.114.917-2.777.254l-.943-.942c-.681-.682-.687-1.977.17-2.834l1.68-1.68a.5.5 0 000-.707zm2.829-2.829a.5.5 0 010-.707l1.68-1.68c1.19-1.19 3.12-1.298 4.248-.17l.942.942c1.155 1.155.905 3.032-.254 4.191l-1.666 1.667a.5.5 0 01-.707-.707l1.666-1.667c.878-.878.918-2.113.254-2.777l-.942-.942c-.682-.682-1.976-.688-2.833.17L12 7.964a.5.5 0 01-.707 0zm3.535 1.414a.5.5 0 10-.707-.707l-4.95 4.95a.5.5 0 10.708.707l4.95-4.95z",
        clipRule: "evenodd"
      })
    ]
  );

  // Return the anchor element with the SVG inside
  return new Tag(
    "a",
    {
      href: `#${attributes.id}`,
      class: "copy-link",
      "aria-label": "Link to this section",
    },
    [svg]
  );
}

export const heading = {
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 }
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    // Create the link with SVG icon
    const link = createLink(attributes);

    // Append the link to the heading"s children
    return new Tag(
      `h${node.attributes["level"]}`,
      { ...attributes },
      [...children, link] // Append the link to the children
    );
  }
};

