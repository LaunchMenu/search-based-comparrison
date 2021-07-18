import { jsx } from "@emotion/react";
import { IRowData } from "./_types/IRowData";
import { TGetRowData } from "./_types/TGetRowData";
/** A table component to render data */
export declare const DataTable: <T extends Object>({ data, getKey, rows, }: {
    data: T[];
    getKey: (entry: T) => string;
    rows: Partial<{ [K in keyof T]: IRowData<TGetRowData<T[K]>>; }>;
}) => jsx.JSX.Element;
//# sourceMappingURL=DataTable.d.ts.map