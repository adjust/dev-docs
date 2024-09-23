import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';
import { heading } from ".schema/Heading.markdoc";
import { link } from ".schema/Link.markdoc";

export default defineMarkdocConfig({
   nodes: {
      heading,
      link,
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
         render: component("src/components/Tab.astro"),
      },
      atlastable: {
         render: component("src/components/Table.astro"),
         attributes: {
            search: {
               type: Boolean,
               required: false,
               default: false,
            },
            resizable: {
               type: String,
               required: false,
            },
            noborder: {
               type: Boolean,
               required: false,
               default: false,
            },
            striped: {
               type: Boolean,
               required: false,
               default: false,
            },
            height: {
               type: [String, Number],
               required: false,
            },
            autoWidth: {
               type: String,
               required: false,
            },
            width: {
               type: String,
               required: false,
            }
         }
      }
   }
})
