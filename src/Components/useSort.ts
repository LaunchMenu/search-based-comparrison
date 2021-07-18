import {FC, ReactNode, useEffect, useState, useRef} from "react";
import {jsx} from "@emotion/react";
import {data} from "../data/data";
import {IRowData} from "./_types/IRowData";
import {TGetRowData} from "./_types/TGetRowData";
import {IDataItem} from "../data/_types/ItemTypes";
import {Spinner} from "./Spinner";

export const useSort = <T extends Object>(
    data: T[],
    rows: Partial<
        {
            [K in keyof T]: IRowData<TGetRowData<T[K]>>;
        }
    >
) => {
    const [ascending, setAscending] = useState(false);
    const [key, setKey] = useState<keyof T>(Object.keys(rows)[0] as keyof T);
    const [sorted, setSorted] = useState(data);

    return {
        sort: (key: keyof T, ascending: boolean = false) => {
            const sort =
                rows[key]?.sort ?? ((a: any, b: any) => a.toString() < b.toString());
            Promise.all(
                data.map(el => {
                    const item = el[key];
                    if (item instanceof Function) return item();
                    return item;
                })
            ).then(valueItems => {
                const values = valueItems.map(item =>
                    typeof item == "object" && "value" in item ? item.value : item
                );
                const sorted = data
                    .map((value, index) => ({value, index}))
                    .sort(
                        ({index: a}, {index: b}) =>
                            (sort(values[a], values[b])
                                ? -1
                                : sort(values[b], values[a])
                                ? 1
                                : 0) * (ascending ? -1 : 1)
                    )
                    .map(({value}) => value);
                setSorted(sorted);
                setKey(key);
                setAscending(ascending);
            });
        },
        sorted,
        ascending,
        key,
    };
};
