import {FC, ReactNode, useEffect, useState, useRef} from "react";
import {jsx} from "@emotion/react";
import {data} from "../data/data";
import {IRowData} from "./_types/IRowData";
import {TGetRowData} from "./_types/TGetRowData";
import {ICategoryData} from "./_types/ICategoryData";
import {IDataItem} from "../data/_types/ItemTypes";
import {Spinner} from "./Spinner";

export const useSort = <T extends Object>(data: T[], categories: ICategoryData<T>[]) => {
    const [ascending, setAscending] = useState(false);
    const [key, setKey] = useState<keyof T>(
        Object.keys(categories[0].data)[0] as keyof T
    );
    const [sorted, setSorted] = useState(data);

    return {
        sort: (categoryIndex: number, key: keyof T, ascending: boolean = false) => {
            const sort =
                categories[categoryIndex].data[key]?.sort ??
                ((a: any, b: any) => a.toString() < b.toString());
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
