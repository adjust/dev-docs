/** @jsxImportSource react */
import { TableV2, Input } from "@adjust/components";
import type { FC } from "react";
import type { TableColumnTypes } from "@adjust/components";
import { useState } from "react";

// Create an interface for the cells. These can be string pairs of any accessor and value.

const BuildMetricTable: FC<{
  columns: TableColumnTypes[];
  data: ColumnCell[];
  search: boolean;
  resizable: boolean;
  bordered: boolean;
  flex: boolean;
  striped: boolean;
  height?: TableHeights;
}> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const visualProperties = {
    areColumnsBordered: props.bordered,
    isStriped: props.striped,
  };

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
        data={props.data}
        columns={props.columns}
        searchTerm={searchTerm}
        visualProperties={visualProperties}
        flex={props.flex}
        height={props.height}
        autoRowsHeight
      />
    </div>
  );
};

export default BuildMetricTable;
