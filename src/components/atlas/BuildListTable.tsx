/** @jsxImportSource react */
import { TableV2, Input } from "@adjust/components";
import type { FC } from "react";
import type { TableColumnTypes } from "@adjust/components";
import { useState } from "react";

// Create an interface for the cells. These can be string pairs of any accessor and value.

interface ColumnCell {
  [key: string]: string;
}

const BuildListTable: FC<{
  content: string;
  search: boolean;
  resizable: boolean;
  bordered: boolean;
}> = (props) => {
  // Set up a blank string for the search term

  const [searchTerm, setSearchTerm] = useState("");

  // The Atlas component passes the body content as a string of HTML.
  // We convert this to HTML using the `dangerouslySetInnerHTML` function.

  const content = <div dangerouslySetInnerHTML={{ __html: props.content }} />;

  // In order to iterate through the list items, we create a new HTML document

  var el = document.createElement("html");

  // Add the HTML string to the newly made document

  el.innerHTML = content.props.dangerouslySetInnerHTML.__html;

  // Select any list item that is a child of a top-level list

  const listItems = el.querySelectorAll("body > ul > li > ul");

  // Initialize blank arrays to hold our data

  let columns: TableColumnTypes[] = [];
  let data: ColumnCell[] = [];

  const visualPropertiesBordered = {
    areColumnsBordered: props.bordered,
  };

  // Loop through each selector
  listItems.forEach((value, key) => {
    // The first row is always the header, so we create the columns array with these values
    if (key === 0) {
      for (let i = 0; i < value.children.length; i++) {
        columns.push({
          // Take the written title as a header
          Header: value.children[i].innerHTML,
          // Use a snake case version of the header as an accessor
          accessor: value.children[i]
            .textContent!.toLowerCase()
            .replace(" ", "_"),
          // We need to tell the Tables component to render this information as
          // HTML so that we can do advanced formatting
          Cell: ({ value }) => (
            <span dangerouslySetInnerHTML={{ __html: value }} />
          ),
          // Make the columns resizable
          isResizable: props.resizable,
          isAutoWidth: !props.resizable,
        });
      }
    }
    // Loop through each list after the first one to fill out the table
    if (key > 0) {
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
    }
  });

  return (
    <div className="overflow-auto">
      {props.search && (
        <div className="px-[15px] pt-[25px] pb-[35px]">
          <Input
            label="Search"
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
        autoRowsHeight
        searchTerm={searchTerm}
        visualProperties={visualPropertiesBordered}
        getFilteredData={(filteredValues) => console.log({ filteredValues })}
      />
    </div>
  );
};

export default BuildListTable;
