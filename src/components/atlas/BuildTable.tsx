import { type TableColumnTypes, TableV2, Input } from "@adjust/components";
import { type FC, useState, useMemo } from "react";
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

const getTextAlignFromStyle = (element: Element): string | null => {
  // Get the column alignment, if present
  const style = element.getAttribute("style");
  if (!style) return null;
  const match = style.match(/text-align:(left|center|right)/);
  return match ? match[1] : null;
};

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
}> = ({
  content,
  search,
  resizable,
  bordered,
  striped,
  autoWidth,
  height,
  lang,
  width,
}) => {
  const t = useTranslations(lang as keyof Locales);
  // Set up a blank string for the search term

  const [searchTerm, setSearchTerm] = useState("");

  // Sort through table content and build table
  const tableData = useMemo(() => {
    if (!content) return { columns: [], data: [] };

    const el = document.createElement("html");
    el.innerHTML = content.props.value;

    const headerItems = el.querySelectorAll("table > thead > tr");
    const bodyItems = el.querySelectorAll("table > tbody > tr");

    const columns: TableColumnTypes[] = [];
    const data: ColumnCell[] = [];

    headerItems.forEach((value) => {
      for (let i = 0; i < value.children.length; i++) {
        const textContent = value.children[i].textContent!;
        const alignment = getTextAlignFromStyle(value.children[i]);
        const columnSettings: TableColumnTypes = {
          Header: textContent,
          accessor: toSnakeCase(textContent),
          Cell: ({ value }) => (
            <Markdown rehypePlugins={[rehypeRaw]}>{value}</Markdown>
          ),
          align: alignment as Alignment,
          alignHeader: alignment as Alignment,
          isResizable: resizable?.includes(i + 1),
          isAutoWidth: autoWidth?.includes(i + 1),
          initialMaxWidth: width?.find((colWidth) => i + 1 in colWidth)?.[
            i + 1
          ],
        };
        columns.push(columnSettings);
      }
    });

    bodyItems.forEach((value) => {
      const row: ColumnCell = {};
      for (let i = 0; i < value.children.length; i++) {
        const accessor = columns[i].accessor.toString();
        row[accessor] = value.children[i].innerHTML;
      }
      data.push(row);
    });

    return { columns, data };
  }, [content, resizable, autoWidth, width]);

  const visualProperties = useMemo(
    () => ({
      areColumnsBordered: bordered,
      isStriped: striped,
      hasGreyBackgroundHeader: true,
    }),
    [bordered, striped],
  );

  return (
    <div className="overflow-auto mb-7">
      {search && (
        <div className="px-[15px] pt-[25px] pb-[35px]">
          <Input
            label={t("table.search-label")}
            type="search"
            value={searchTerm}
            onClear={() => setSearchTerm("")}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <TableV2
        data={tableData.data}
        columns={tableData.columns}
        searchTerm={searchTerm}
        visualProperties={visualProperties}
        flex={!width && !autoWidth}
        height={height}
        autoRowsHeight
      />
    </div>
  );
};

export default BuildTable;
