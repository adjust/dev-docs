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

interface ColumnWidth {
  [key: number]: number;
}

type Alignment = "center" | "left" | "right" | undefined;

function getTextAlignFromStyle(element: Element): string | null {
  // Predefined list of options
  const options = ["left", "center", "right"];

  // Fetch the style attribute
  const style = element.getAttribute("style");

  // If the style attribute is null, return null
  if (!style) {
    return null;
  }

  // Look for a match in the style attribute
  for (const option of options) {
    if (style.includes(`text-align:${option}`)) {
      return option;
    }
  }

  // If no match is found, return null
  return null;
}

const BuildTable: FC<{
  content?: JSX.Element;
  search?: boolean;
  resizable?: number[];
  bordered?: boolean;
  striped?: boolean;
  autoWidth?: number[];
  height?: TableHeights;
  lang: string;
  width?: ColumnWidth[];
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

  // Check if the column should be automatically sized

  const checkAutoWidth = (columnNumber: number): boolean => {
    let updatedNumber = columnNumber + 1;
    if (props.autoWidth && props.autoWidth.includes(updatedNumber)) {
      return true;
    }
    return false;
  };

  // Check if the column should be resizable

  const checkResizable = (columnNumber: number): boolean => {
    let updatedNumber = columnNumber + 1;
    if (props.resizable && props.resizable.includes(updatedNumber)) {
      return true;
    }
    return false;
  };

  // Check if the column has a set size

  const checkWidth = (columnNumber: number): number | undefined => {
    let updatedNumber = columnNumber + 1;
    if (props.width) {
      for (const columnWidth of props.width) {
        if (updatedNumber in columnWidth) {
          return columnWidth[updatedNumber];
        }
      }
    }
    return undefined;
  };
  // Loop through each selector
  headerItems.forEach((value) => {
    // Take the value of each header element.
    for (let i = 0; i < value.children.length; i++) {
      let alignment = getTextAlignFromStyle(value.children[i]);
      let columnSettings: TableColumnTypes = {
        // Take the written title as a header
        Header: value.children[i].textContent!,
        // Use a snake case version of the header as an accessor
        accessor: toSnakeCase(value.children[i].textContent!),
        // We need to tell the Tables component to render this information as
        // HTML so that we can do advanced formatting
        Cell: ({ value }) => (
          <Markdown rehypePlugins={[rehypeRaw]}>{value}</Markdown>
        ),
      };
      if (alignment) {
        columnSettings.align = alignment as Alignment;
        columnSettings.alignHeader = alignment as Alignment;
      }
      if (props.resizable) {
        columnSettings.isResizable = checkResizable(i);
      }
      if (props.autoWidth) {
        columnSettings.isAutoWidth = checkAutoWidth(i);
      }
      if (props.width) {
        let checkedWidth = checkWidth(i);
        if (checkedWidth) {
          columnSettings.initialMaxWidth = checkedWidth;
        }
      }
      columns.push(columnSettings);
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
        flex={!props.width && !props.autoWidth}
        height={props.height}
        autoRowsHeight
      />
    </div>
  );
};

export default BuildTable;
