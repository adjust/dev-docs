import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import type { Element, Root } from "hast";

/**
 * Checks if a value is a definition list term.
 * @param text The text value of the element.
 * @returns Whether the value of the element is a term.
 */
const isTerm = (text: string): boolean => {
   return /^\S[^: ].*$/.test(text.trim());
};

/**
 * Checks if a value is a definition list description.
 * @param text The text value of the element.
 * @returns Whether the value of the element is a term.
 */
const isDescription = (text: string): boolean => {
   return /^(:|\s)/.test(text.trim());
};

/**
 * Converts an HTML string into a definition list.
 * @param htmlString The string representation of the HTML to be converted
 * @returns An updated HTML string which renders a definition list.
 */
export const parseDefList = async (htmlString: string): Promise<string> => {
   const processor = unified()
      .use(rehypeParse, { fragment: true })
      .use(() => {
         return (tree: Root) => {
            const children = tree.children;

            if (!children || children.length === 0) {
               return;
            }

            // Create a parent definition list node
            const dlNode: Element = {
               type: "element",
               tagName: "dl",
               children: [],
               properties: {},
            };

            // Create empty variables to hold our current term/description items in
            let currentTerm: Element | null = null;
            let currentDescription: Element[] = [];

            // Go through each child and check if it is a term or a description
            children.forEach((element) => {
               if (element.type === 'element') {
                  if (element.tagName === 'p') {
                     const text = element.children
                        .filter((child): child is Element & { value: string } => child.type === 'text')
                        .map((child) => child.value)
                        .join("")
                        .trim();

                     // Perform this action for each term
                     if (isTerm(text)) {
                        // If we reach a new term, we need to finish appending the descriptions to the last term we were working on.
                        if (currentTerm) {
                           // Add the term to the list
                           dlNode.children.push(currentTerm);
                           // Add all collected descriptions
                           currentDescription.forEach(dd => dlNode.children.push(dd));
                           currentDescription = [];
                        }

                        // If this is the first term, assign it as the current term.
                        currentTerm = {
                           type: "element",
                           tagName: "dt",
                           children: [{ type: "text", value: text }],
                           properties: {},
                        };
                     } else if (isDescription(text) && currentTerm) {
                        // If the element is a description (paragraph starting with whitespace or a colon), add it to the currentDescription array
                        currentDescription.push({
                           type: "element",
                           tagName: "dd",
                           children: [{ type: "text", value: text.replace(/^:/, "").trim() }],
                           properties: {},
                        });
                     }
                  } else {
                     // If the element isn't a paragraph tag, it will be a description
                     if (currentTerm) {
                        // If we have an ongoing term, finalize it
                        dlNode.children.push(currentTerm);
                        currentTerm = null;
                        // Add all collected descriptions
                        currentDescription.forEach(dd => dlNode.children.push(dd));
                        currentDescription = [];
                     }

                     // Wrap all elements that aren't a paragraph in a <dd> tag
                     const ddElement: Element = {
                        type: "element",
                        tagName: "dd",
                        children: [element],
                        properties: {},
                     };
                     // Add the description element to the definition list
                     dlNode.children.push(ddElement);
                  }
               }
            });

            // Finalize the last term-description pair if it exists
            if (currentTerm) {
               dlNode.children.push(currentTerm);
               if (currentDescription.length > 0) {
                  currentDescription.forEach(dd => dlNode.children.push(dd));
               }
            }

            // Overwrite the entire tree with the new <dl> node
            tree.children = [dlNode];
         };
      })
      .use(rehypeStringify); // Convert the result to a string so we can use set:html

   // Process and return the transformed HTML
   const result = await processor.process(htmlString);
   return String(result);
};
