import { type TableColumnTypes, TableV2, Input } from "@adjust/components";
import { type FC, useState } from "react";
import { toSnakeCase } from "@components/utils/convertCase";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import type { Locales } from "@i18n/locales";
import { useTranslations } from "@i18n/utils";

// Create an interface for the cells. These can be string pairs of any accessor and value.

interface ColumnCell {
  [key: string]: string;
}

type Alignment = "center" | "left" | "right" | undefined;

const BuildTable: FC<{
  content?: JSX.Element;
  search: boolean;
  resizable: boolean;
  bordered: boolean;
  flex: boolean;
  striped: boolean;
  height?: TableHeights;
  lang: string;
}> = (props) => {
  const t = useTranslations(props.lang as keyof Locales);
  // Set up a blank string for the search term

  const [searchTerm, setSearchTerm] = useState("");

  const el = document.createElement("html");

  // Add the HTML string to the newly made document

  el.innerHTML = props.content?.props.value;

  // Initialize blank arrays to hold our data

  let columns: TableColumnTypes[] = [];
  let data: ColumnCell[] = [];

  // Store visual properties as an object

  const visualProperties = {
    areColumnsBordered: props.bordered,
    isStriped: props.striped,
    hasGreyBackgroundHeader: true,
  };

  // Select any values from HTML

  const headerItems = el.querySelectorAll("table > thead > tr");
  const bodyItems = el.querySelectorAll("table > tbody > tr");
  // Loop through each selector
  headerItems.forEach((value) => {
    // Take the value of each header element.
    for (let i = 0; i < value.children.length; i++) {
      columns.push({
        // Take the written title as a header
        Header: value.children[i].textContent!,
        // Use a snake case version of the header as an accessor
        accessor: toSnakeCase(value.children[i].textContent!),
        // We need to tell the Tables component to render this information as
        // HTML so that we can do advanced formatting
        Cell: ({ value }) => (
          <Markdown rehypePlugins={[rehypeRaw]}>{value}</Markdown>
        ),
        // Make the columns resizable
        isResizable: props.resizable,
        isAutoWidth: !props.resizable,
        align: value.children[i].getAttribute("align") as Alignment,
        alignHeader: value.children[i].getAttribute("align") as Alignment,
      });
    }
  }),
    // Take the value of each table body  element.
    bodyItems.forEach((value) => {
      // Initialize an empty object
      var row: ColumnCell = {};
      for (let i = 0; i < value.children.length; i++) {
        // Add the accessor at the same position as the list item
        let accessor: string = columns[i].accessor.toString();
        // Create a new value pair and add it to the object
        row[accessor] = value.children[i].innerHTML;
      }
      // Add the object to the array
      data.push(row);
    });

  return (
    <div className="overflow-auto mb-7">
      {props.search && (
        <div className="px-[15px] pt-[25px] pb-[35px]">
          <Input
            label={t("table.search-label")}
            type="search"
            value={searchTerm}
            onClear={() => {
              setSearchTerm("");
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      )}
      <TableV2
        data={data}
        columns={columns}
        searchTerm={searchTerm}
        visualProperties={visualProperties}
        flex={props.flex}
        height={props.height}
        autoRowsHeight
      />
    </div>
  );
};

export default BuildTable;
