import { TableV2, Input, ActionMenu, IconButton } from "@adjust/components";
import type { FC } from "react";
import type { ItemType, TableColumnTypes } from "@adjust/components";
import { useState } from "react";
import Markdown from "react-markdown";

// Create an interface for the cells. These can be string pairs of any accessor and value.

const BuildMetricTable: FC<{
  data: ColumnCell[];
  search: boolean;
  resizable: boolean;
  bordered: boolean;
  flex: boolean;
  striped: boolean;
  height?: TableHeights;
}> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(props.data);

  const visualProperties = {
    areColumnsBordered: props.bordered,
    isStriped: props.striped,
  };

  const sections = [
    ...new Set(props.data.map((item) => item.section).filter((n) => n)),
  ];

  const SectionFilters = () => {
    let items: ItemType[] = [
      { type: "divider" },
      {
        label: "Clear",
        iconName: "Cross",
        onClick: () => {
          setData(props.data);
        },
      },
    ];

    sections.forEach((section) => {
      let item: ItemType = {
        label: section,
        onClick: () => {
          setData(props.data.filter((i) => i.section === section));
        },
      };
      items.unshift(item);
    });

    return (
      <ActionMenu items={items}>
        <IconButton iconName="Filter" aria-label="Filter" size="small" />
      </ActionMenu>
    );
  };

  const columns: TableColumnTypes[] = [
    {
      Header: "Metric",
      accessor: "metric",
      Cell: ({ value }) => (
        <Markdown
          components={{
            p: "code",
          }}
        >
          {value}
        </Markdown>
      ),
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Data type",
      accessor: "data_type",
      disableGlobalFilter: true,
    },
    {
      Header: "Section",
      accessor: "section",
      sortable: true,
      headerActions: <SectionFilters />,
    },
    {
      Header: "Description",
      accessor: "description",
      Cell: ({ value }) => <Markdown>{value}</Markdown>,
    },
  ];

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
