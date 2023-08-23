/** @jsxImportSource react */

function stringToHtml(content: string) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export function htmlWithTitles(content: string) {
  let itemBody = stringToHtml(content);

  // We hold this content in a faux document element

  let el = document.createElement("html");

  el.innerHTML = itemBody.props.dangerouslySetInnerHTML.__html;

  /* To ensure we can translate content, we write it all in Markdown.
   We need to extract the first header 3 and use it as the label */

  let title = el.querySelector("body > h3");

  let label = title?.textContent?.toString();

  // If the next sibling of the header is a header 4, we need to store this.

  let badgeCheck = title?.nextSibling;

  let badge: string | undefined;

  // Store the header 4 and remove it if

  if (badgeCheck?.nodeName === "H4") {
    badge = badgeCheck?.textContent?.toString();
    badgeCheck?.remove();
  }

  // Remove the title

  title?.remove();

  // Next we convert the stringified HTML back to a React element

  let body = stringToHtml(el.innerHTML.toString());

  return {
    title: label,
    body: body,
    badge: badge,
  };
}
