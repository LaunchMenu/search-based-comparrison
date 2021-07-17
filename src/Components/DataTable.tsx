import {FC, ReactNode, useEffect, useState} from "react";
import {jsx} from "@emotion/react";
import {data} from "../data/data";
import {IRowData} from "./_types/IRowData";
import {TGetRowData} from "./_types/TGetRowData";
import {IDataItem} from "../data/_types/ItemTypes";
import {Spinner} from "./Spinner";

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
    const [sortKey, setSortKey] = useState<keyof T>(Object.keys(rows)[0] as keyof T);
    const [ascending, setAscending] = useState(true);

    const sort = rows[sortKey]?.sort;
    if (sort)
        data.sort((a, b) =>
            sort(a[sortKey] as any, b[sortKey] as any) == ascending ? -1 : 1
        );

    return (
        <table>
            <tbody>
                {Object.entries(rows).map(([rowName, {description, sort, Comp}], i) => {
                    const CellType = i == 0 ? "th" : "td";

                    return (
                        <tr key={rowName}>
                            {
                                <CellType
                                    onClick={() => {
                                        if (sortKey == rowName) setAscending(asc => !asc);
                                        else setSortKey(rowName as keyof T);
                                    }}>
                                    {description}
                                </CellType>
                            }

                            {data.map((item, index) => {
                                const value = item[rowName as keyof T];
                                const key = getKey(item);

                                return (
                                    <CellType key={key}>
                                        <DataCell
                                            Comp={Comp}
                                            index={index}
                                            data={value}
                                        />
                                    </CellType>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

const DataCell: FC<{Comp: IRowData<any>["Comp"]; index: number; data: IDataItem<any>}> =
    ({data, Comp, index}) => {
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
            value = functionValue;
        } else {
            value = data;
        }

        if (typeof value != "object" || !("tooltip" in value)) value = {value};

        return (
            <div title={value.tooltip}>
                {typeof value.value != "undefined" ? (
                    <Comp index={index} data={value.value} />
                ) : (
                    <Spinner />
                )}
                {value.tooltip ? "*" : ""}
            </div>
        );
    };
