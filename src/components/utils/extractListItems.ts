import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { selectAll } from "hast-util-select";
import { toHtml } from "hast-util-to-html";
import type { Root, Element } from "hast";

export const extractListItems = async (htmlString: string): Promise<string[]> => {
   const processor = unified().use(rehypeParse, { fragment: true });
   const ast = processor.parse(htmlString) as Root;

   const ulElements = selectAll("ul", ast) as Element[];

   const listHtmlStrings = ulElements.map(ul => {
      const html = toHtml(ul);
      return html;
   });

   return listHtmlStrings;
};
