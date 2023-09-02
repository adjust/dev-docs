/** @jsxImportSource react */

function stringToHtml(content: string) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export const htmlWithTitles = (content: string) => {
  const itemBody = stringToHtml(content);

  // We hold this content in a faux document element

  const el = document.createElement("html");

  el.innerHTML = itemBody.props.dangerouslySetInnerHTML.__html;

  /* To ensure we can translate content, we write it all in Markdown.
   We need to extract the first header 3 and use it as the label */

  const title = el.querySelector("body > h3");
  let label: string = "";
  let anchor: string = "";

  if (title && title.textContent) {
    label = title.textContent.toString();
    anchor = title.id.toString();
  }

  // If the next sibling of the header is a header 4, we need to store this.

  const badgeCheck = title?.nextSibling;

  let badge: string | undefined;

  // Store the header 4 and remove it if

  if (badgeCheck?.nodeName === "H4") {
    badge = badgeCheck?.textContent?.toString();
    badgeCheck?.remove();
  }

  // Remove the title

  title?.remove();

  // Next we convert the stringified HTML back to a React element

  const body = stringToHtml(el.innerHTML.toString());

  return {
    title: label,
    anchor: anchor,
    body: body,
    badge: badge,
  };
};
