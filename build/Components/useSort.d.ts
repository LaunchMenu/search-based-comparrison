import { IRowData } from "./_types/IRowData";
import { TGetRowData } from "./_types/TGetRowData";
export declare const useSort: <T extends Object>(data: T[], rows: Partial<{ [K in keyof T]: IRowData<TGetRowData<T[K]>>; }>) => {
    sort: (key: keyof T, ascending?: boolean) => void;
    sorted: T[];
    ascending: boolean;
    key: keyof T;
};
//# sourceMappingURL=useSort.d.ts.map