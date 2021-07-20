import { IDataItem } from "../../data/_types/ItemTypes";
/** Retrieves the raw data that a column may have */
export declare type TGetRowData<T> = T extends IDataItem<infer U> ? U : T;
//# sourceMappingURL=TGetRowData.d.ts.map