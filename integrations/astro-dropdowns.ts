import type { AstroUserConfig } from 'astro';
import { h as _h, Properties } from 'hastscript';
import type { Paragraph as P, Root } from 'mdast';
import remarkDirective from 'remark-directive';
import type { Plugin, Transformer } from 'unified';
import { remove } from 'unist-util-remove';
import { visit } from 'unist-util-visit';

/** Generate an mdast HTML tree ready for conversion to HTML by rehype. */
function h(el: string, attrs: Properties = {}, children: any[] = []): P {
   const { tagName, properties } = _h(el, attrs);
   return {
      type: 'paragraph',
      data: { hName: tagName, hProperties: properties },
      children,
   };
}

/**
 * remark plugin that converts blocks delimited with `:::` into styled
 * dropdowns (a.k.a. "accordions"). Depends on the `remark-directive` module
 * for the core parsing logic.
 *
 * For example, this Markdown
 *
 * ```md
 * :::dropdown[Did you know?]
 * Astro helps you build faster websites with “Islands Architecture”.
 * :::
 * ```
 *
 * will produce this output
 *
 * ```astro
 * <details class="dropdown" aria-label="Did you know?">
 *   <summary class="summary" aria-hidden="true">Did you know?</summary>
 *   <section class="dropdown-content">
 *     <p>Astro helps you build faster websites with “Islands Architecture”.</p>
 *   </section>
 * </details>
 * ```
 */
function remarkDropdowns(): Plugin<[], Root> {

   const transformer: Transformer<Root> = (tree) => {
      visit(tree, (node, index, parent) => {
         if (!parent || index === null || node.type !== 'containerDirective') {
            return;
         }
         const directive = node.name;
         if (directive !== "dropdown") return;

      // remark-directive converts a container’s “label” to a paragraph in
      // its children, but we want to pass it as the summary, so
      // we iterate over the children, find a directive label, store it for the
         // summary, and remove the paragraph from children.
         let summary = "dropdown"
         remove(node, (child): boolean | void => {
            if (child.data?.directiveLabel) {
               if (
                  'children' in child &&
                  Array.isArray(child.children) &&
                  'value' in child.children[0]
               ) {
                  summary = child.children[0].value;
               }
               return true;
            }
         });

         const dropdown = h(
            'details',
            {
               'aria-label': summary,
               class: `dropdown`,
            },
            [
               h('summary', { class: `summary` }, [
                  { type: 'text', value: summary },
               ]),
               h('section', { class: `dropdown-content` }, node.children),
            ]
         );

         parent.children[index] = dropdown;
      });
   };

   return function attacher() {
      return transformer;
   };
}

type RemarkPlugins = NonNullable<
   NonNullable<AstroUserConfig['markdown']>['remarkPlugins']
>;

export function astroDropdowns(): RemarkPlugins {
   return [remarkDirective, remarkDropdowns()];
}
