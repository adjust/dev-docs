import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { selectAll } from "hast-util-select";
import { toHtml } from "hast-util-to-html";
import type { Root, Element, Content } from "hast";
import { h } from "hastscript";

export const extractDefinitionList = async (
  htmlString: string,
): Promise<string> => {
  // Parse the HTML string into a HAST (Hypertext Abstract Syntax Tree)
  const processor = unified().use(rehypeParse, { fragment: true });
  const ast = processor.parse(htmlString) as Root;

  // Find all <li> elements
  const liElements = selectAll("li", ast) as Element[];

  // Create a <dl> element
  const dlElement: Element = h("dl", []);

  liElements.forEach((li) => {
    const children = li.children || [];

    if (children.length > 0) {
      // Extract content from the first child and create <dt> element
      const firstChild = children[1];
      const dtContent: Content[] =
        firstChild.type === "element" && firstChild.tagName === "p"
          ? firstChild.children || []
          : [firstChild];
      const dtElement = h("dt", dtContent);
      dlElement.children.push(dtElement);

      // The remaining children become <dd> elements
      for (let i = 2; i < children.length; i++) {
        const child = children[i];
        const ddContent: Content[] =
          child.type === "element" && child.tagName === "p"
            ? child.children || []
            : [child];
        const ddElement = h("dd", ddContent);
        dlElement.children.push(ddElement);
      }
    }
  });

  // Convert the <dl> HAST node back to an HTML string
  const dlHtmlString = toHtml(dlElement);

  return dlHtmlString;
};
