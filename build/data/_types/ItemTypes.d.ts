/**
 * Item status <T>. Some special values indicate other situations:
 *   N/A     - A feature can't be implemented because a dependency is missing.
 *   TBC     - Feature status is "To be confirmed"
 */
export declare type IValue<T> = T | "N/A" | "TBC";
export declare type IRawDataItem<T> = IValue<T> | {
    value: IValue<T>;
    tooltip: string;
};
export declare type IDataItem<T> = IRawDataItem<T> | (() => Promise<IRawDataItem<T>> | IRawDataItem<T>);
/**
 * Item status <T>. Some special values indicate other situations:
 *   PLANNED - Where the feature is planned but not currently available.
 *   N/A     - A feature can't be implemented because a dependency is missing.
 *   TBC     - Feature status is "To be confirmed"
 */
export declare type IPlannableItem<T> = IDataItem<T | "PLANNED">;
/**
 * A useful link required during comparison
 */
export declare type ISite = {
    type: "main" | "github" | string;
    url: string;
};
/**
 * Operating system flag
 */
export declare type IOperatingSystem = {
    type: "mac" | "windows" | "linux";
    supported: boolean | "PLANNED";
};
//# sourceMappingURL=ItemTypes.d.ts.map