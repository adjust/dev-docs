import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';
import { heading } from ".schema/Heading.markdoc";
import { link } from ".schema/Link.markdoc";
import { paragraph } from ".schema/Paragraph.markdoc";
import { list } from ".schema/List.markdoc";
import versions from "src/versionMap.json";
import variables from "src/variables.json";

export default defineMarkdocConfig({
   variables: {
      versions,
      variables
   },
   nodes: {
      heading,
      link,
      list,
      paragraph,
      fence: {
         attributes: { ...nodes.fence.attributes },
         render: component("/src/components/SimpleCode.astro"),
      },
   },
   tags: {
      accordion: {
         render: component("src/components/Accordion.astro"),
         attributes: {
            title: {
               type: String,
               required: true,
            },
            badge: {
               type: String,
               required: false,
            }
         }
      },
      callout: {
         render: component("src/components/Callout.astro"),
         attributes: {
            title: {
               type: String,
               required: false,
            },
            type: {
               type: String,
               matches: ["info", "tip", "warning", "important", "seealso", "note"],
               default: "info",
               required: false,
            }
         }
      },
      codeblock: {
         render: component("src/components/CodeBlock.astro"),
         attributes: {
            title: {
               type: String,
               required: false,
            },
            highlight: {
               type: String,
               required: false,
            },
            collapse: {
               type: [String, Array],
               required: false,
            },
            ins: {
               type: String,
               required: false,
            },
            del: {
               type: String,
               required: false,
            },
            useDiffSyntax: {
               type: Boolean,
               required: false,
               default: false
            }
         }
      },
      deflist: {
         render: component("src/components/DefList.astro"),
      },
      listcolumns: {
         render: component("src/components/ListColumns.astro"),
      },
      minorversion: {
         render: component("src/components/MinorVersion.astro"),
         attributes: {
            added: {
               type: String,
               required: false
            },
            changed: {
               type: String,
               required: false
            },
            removed: {
               type: String,
               required: false
            },
            size: {
               type: String,
               matches: ["small", "medium", "large"],
               required: false,
               default: "medium"
            },
         }
      },
      tab: {
         render: component("src/components/Tab.astro"),
         attributes: {
            title: {
               type: String,
               required: true,
            },
            sync: {
               type: String,
               required: false,
            },
            icon: {
               type: String,
               required: false,
            }
         }
      },
      tabs: {
         render: component("src/components/Tabs.astro"),
      },
   }
})
