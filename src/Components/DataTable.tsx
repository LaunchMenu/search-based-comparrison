import {FC, ReactNode, useEffect, useState, useRef} from "react";
import {jsx} from "@emotion/react";
import {data} from "../data/data";
import {IRowData} from "./_types/IRowData";
import {TGetRowData} from "./_types/TGetRowData";
import {ICategoryData} from "./_types/ICategoryData";
import {IDataItem} from "../data/_types/ItemTypes";
import {Spinner} from "./Spinner";
import {useSort} from "./useSort";

/** A table component to render data */
export const DataTable = <T extends Object>({
    data,
    getKey,
    categories,
}: {
    data: T[];
    getKey: (entry: T) => string;
    categories: ICategoryData<T>[];
}) => {
    const {sorted, sort, ascending, key: sortKey} = useSort(data, categories);

    const headerColor = "#4F81BD";
    const tableData = categories.map(({name, tooltip, data: categoryData}, i) => [
        ...(name
            ? [
                  <tr
                      key={name}
                      title={tooltip}
                      css={{
                          textAlign: "left",
                          color: "white",
                          backgroundColor: headerColor,
                      }}>
                      <th colSpan={data.length + 1}>{name}</th>
                  </tr>,
              ]
            : []),
        ...Object.entries(categoryData).map(([rowName, row], j) => {
            const isHeader = i == 0 && j == 0;
            const CellType = i == 0 && j == 0 ? "th" : "td";
            const {description} = row;

            return (
                <tr
                    key={rowName}
                    css={{
                        textAlign: "center",
                        color: isHeader ? "white" : "black",
                        backgroundColor: isHeader
                            ? headerColor
                            : j % 2 == 0
                            ? "#B8CCE4"
                            : "#DCE5F2",
                        position: isHeader ? "sticky" : "relative",
                        top: 0,
                        zIndex: isHeader ? 1 : 0,
                    }}>
                    {
                        <CellType
                            css={{textAlign: "left", cursor: "pointer"}}
                            onClick={() => {
                                sort(
                                    i,
                                    rowName as keyof T,
                                    sortKey == rowName ? !ascending : ascending
                                );
                            }}>
                            {description}
                        </CellType>
                    }

                    {sorted.map((item, index) => {
                        const value = item[rowName as keyof T];
                        const key = getKey(item);

                        return (
                            <DataCell
                                key={key}
                                row={row}
                                index={index}
                                data={value}
                                CellType={CellType}
                            />
                        );
                    })}
                </tr>
            );
        }),
    ]);

    return (
        <table css={{position: "relative"}}>
            <tbody>{tableData}</tbody>
        </table>
    );
};

const DataCell: FC<{
    row: IRowData<any>;
    index: number;
    data: IDataItem<any>;
    CellType: "td" | "th";
}> = ({row, data, index, CellType}) => {
    const [functionValue, setFunctionValue] = useState();
    useEffect(() => {
        if (data instanceof Function) {
            (async () => {
                const value = await data();
                setFunctionValue(value);
            })().catch(console.error);
        }
    }, []);

    let value;
    if (data instanceof Function) {
        value = functionValue ?? "__LOADING__";
    } else {
        value = data;
    }

    if (typeof value != "object" || !("tooltip" in value)) value = {value};

    return (
        <CellType css={{position: "relative", ...row.css?.(value.value)}}>
            <div title={value.tooltip}>
                {value.value != "__LOADING__" ? (
                    <row.Comp index={index} data={value.value} />
                ) : (
                    <Spinner />
                )}
                <div css={{position: "absolute", top: 0, right: 0}}>
                    {value.tooltip ? "*" : ""}
                </div>
            </div>
        </CellType>
    );
};
