import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import type { Element, Root, Text } from "hast";

/**
 * Extracts text content from an element's children recursively.
 * @param children The children of the element.
 * @returns The concatenated text content.
 */
const getTextContent = (children: (Element | Text)[]): string => {
   return children
      .map((child) => {
         if (child.type === 'text') {
            return child.value;
         } else if (child.type === 'element') {
            // Recursively get the text content of nested elements
            return getTextContent(child.children as (Element | Text)[]);
         }
         return '';
      })
      .join('');
};

/**
 * Checks if a value is a definition list term.
 * @param children The children of the element.
 * @returns Whether the value of the element is a term.
 */
const isTerm = (children: (Element | Text)[]): boolean => {
   const text = getTextContent(children).trim();
   return /^\S[^: ].*$/.test(text);
};

/**
 * Checks if a value is a definition list description.
 * @param children The children of the element.
 * @returns Whether the value of the element is a description.
 */
const isDescription = (children: (Element | Text)[]): boolean => {
   const text = getTextContent(children).trim();
   return /^(:|\s)/.test(text);
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
                     const textChildren = element.children as (Element | Text)[];

                     // Check if this paragraph contains a term
                     if (isTerm(textChildren)) {
                        // If we reach a new term, we need to finish appending the descriptions to the last term we were working on.
                        if (currentTerm) {
                           // Push the last term and its descriptions
                           dlNode.children.push(currentTerm);
                           currentDescription.forEach(dd => dlNode.children.push(dd));
                           currentDescription = [];
                        }

                        currentTerm = {
                           type: "element",
                           tagName: "dt",
                           children: textChildren,  // Keep all children, including inline formatting
                           properties: {},
                        };
                     } else if (isDescription(textChildren) && currentTerm) {
                        currentDescription.push({
                           type: "element",
                           tagName: "dd",
                           children: textChildren.map(child => {
                              if (child.type === 'text') {
                                 // Strip leading colon or whitespace for descriptions
                                 return {
                                    ...child,
                                    value: child.value.replace(/^:/, '').trim(),
                                 };
                              }
                              return child;
                           }),
                           properties: {},
                        });
                     }
                  } else {
                     // Non-paragraph elements are considered descriptions
                     if (currentTerm) {
                        dlNode.children.push(currentTerm);
                        currentTerm = null;
                        currentDescription.forEach(dd => dlNode.children.push(dd));
                        currentDescription = [];
                     }

                     const ddElement: Element = {
                        type: "element",
                        tagName: "dd",
                        children: [element],  // Wrap the non-paragraph element
                        properties: {},
                     };
                     dlNode.children.push(ddElement);
                  }
               }
            });

            // Finalize the last term-description pair
            if (currentTerm) {
               dlNode.children.push(currentTerm);
               currentDescription.forEach(dd => dlNode.children.push(dd));
            }

            // Replace the tree with the new <dl> node
            tree.children = [dlNode];
         };
      })
      .use(rehypeStringify);

   const result = await processor.process(htmlString);
   return String(result);
};
