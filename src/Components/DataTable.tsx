import {FC, ReactNode, useEffect, useState, useRef} from "react";
import {jsx} from "@emotion/react";
import {data} from "../data/data";
import {IRowData} from "./_types/IRowData";
import {TGetRowData} from "./_types/TGetRowData";
import {IDataItem} from "../data/_types/ItemTypes";
import {Spinner} from "./Spinner";
import {useSort} from "./useSort";

/** A table component to render data */
export const DataTable = <T extends Object>({
    data,
    getKey,
    rows,
}: {
    data: T[];
    getKey: (entry: T) => string;
    rows: Partial<
        {
            [K in keyof T]: IRowData<TGetRowData<T[K]>>;
        }
    >;
}) => {
    const {sorted, sort, ascending, key: sortKey} = useSort(data, rows);

    return (
        <table>
            <tbody>
                {Object.entries(rows).map(([rowName, row], i) => {
                    const CellType = i == 0 ? "th" : "td";
                    const {description} = row;

                    return (
                        <tr
                            key={rowName}
                            css={{
                                textAlign: "center",
                                color: i == 0 ? "white" : "black",
                                backgroundColor:
                                    i == 0
                                        ? "#4F81BD"
                                        : i % 2 == 0
                                        ? "#B8CCE4"
                                        : "#DCE5F2",
                            }}>
                            {
                                <CellType
                                    css={{textAlign: "left", cursor: "pointer"}}
                                    onClick={() => {
                                        sort(
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
                })}
            </tbody>
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
