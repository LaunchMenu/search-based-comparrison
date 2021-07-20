import {IRowData} from "./IRowData";
import {TGetRowData} from "./TGetRowData";

export type ICategoryData<T extends Object> = {
    /** The name of the category */
    name?: string;
    /** An optional tooltip */
    tooltip?: string;
    /** The data in the category */
    data: Partial<{[K in keyof T]: IRowData<TGetRowData<T[K]>>}>;
};
