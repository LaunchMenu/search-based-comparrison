import { jsx } from "@emotion/react";
import { ICategoryData } from "./_types/ICategoryData";
/** A table component to render data */
export declare const DataTable: <T extends Object>({ data, getKey, categories, }: {
    data: T[];
    getKey: (entry: T) => string;
    categories: ICategoryData<T>[];
}) => jsx.JSX.Element;
//# sourceMappingURL=DataTable.d.ts.map