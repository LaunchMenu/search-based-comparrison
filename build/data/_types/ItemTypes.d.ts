/**
 * Item status <T>. Can also contain some special values indicate other situations:
 *   N/A     - A feature can't be implemented because a dependency is missing.
 *   TBC     - Feature status is "To be confirmed"
 */
export declare type IValue<T> = T | "N/A" | "TBC" | "PREMIUM";
export declare type IRawDataItem<T> = IValue<T> | {
    value: IValue<T>;
    tooltip: string;
};
export declare type IDataItem<T> = IRawDataItem<T> | (() => Promise<IRawDataItem<T>> | IRawDataItem<T>);
/**
 * Item status <T>. Can also contain some special values indicate other situations:
 *   ShortTermPlan - Feature is planned / currently being worked on / Is a short way of being complete.
 *   LongTermPlan  - Feature is planned but ETA is in far future / not high priority for core dev team.
 *   N/A     - A feature can't be implemented because a dependency is missing.
 *   TBC     - Feature status is "To be confirmed"
 */
export declare type IPlannableItem<T> = IDataItem<T | "PlannedShortTerm" | "PlannedLongTerm">;
/**
 * A useful link required during comparison
 */
export declare type ISite = {
    type: "main" | "github" | string;
    url: string;
};
export declare const Languages: {
    ar: {
        code: string;
        symbol: string;
        name: string;
    };
    be: {
        code: string;
        symbol: string;
        name: string;
    };
    ca: {
        code: string;
        symbol: string;
        name: string;
    };
    cs: {
        code: string;
        symbol: string;
        name: string;
    };
    da: {
        code: string;
        symbol: string;
        name: string;
    };
    de: {
        code: string;
        symbol: string;
        name: string;
    };
    en: {
        code: string;
        symbol: string;
        name: string;
    };
    eo: {
        code: string;
        symbol: string;
        name: string;
    };
    es: {
        code: string;
        symbol: string;
        name: string;
    };
    et: {
        code: string;
        symbol: string;
        name: string;
    };
    fa: {
        code: string;
        symbol: string;
        name: string;
    };
    fi: {
        code: string;
        symbol: string;
        name: string;
    };
    fr: {
        code: string;
        symbol: string;
        name: string;
    };
    ga: {
        code: string;
        symbol: string;
        name: string;
    };
    he: {
        code: string;
        symbol: string;
        name: string;
    };
    hi: {
        code: string;
        symbol: string;
        name: string;
    };
    hu: {
        code: string;
        symbol: string;
        name: string;
    };
    id: {
        code: string;
        symbol: string;
        name: string;
    };
    is: {
        code: string;
        symbol: string;
        name: string;
    };
    it: {
        code: string;
        symbol: string;
        name: string;
    };
    ja: {
        code: string;
        symbol: string;
        name: string;
    };
    kk: {
        code: string;
        symbol: string;
        name: string;
    };
    ko: {
        code: string;
        symbol: string;
        name: string;
    };
    ky: {
        code: string;
        symbol: string;
        name: string;
    };
    lt: {
        code: string;
        symbol: string;
        name: string;
    };
    lv: {
        code: string;
        symbol: string;
        name: string;
    };
    nl: {
        code: string;
        symbol: string;
        name: string;
    };
    no: {
        code: string;
        symbol: string;
        name: string;
    };
    pl: {
        code: string;
        symbol: string;
        name: string;
    };
    pt: {
        code: string;
        symbol: string;
        name: string;
    };
    ro: {
        code: string;
        symbol: string;
        name: string;
    };
    ru: {
        code: string;
        symbol: string;
        name: string;
    };
    sk: {
        code: string;
        symbol: string;
        name: string;
    };
    sl: {
        code: string;
        symbol: string;
        name: string;
    };
    sv: {
        code: string;
        symbol: string;
        name: string;
    };
    th: {
        code: string;
        symbol: string;
        name: string;
    };
    tr: {
        code: string;
        symbol: string;
        name: string;
    };
    uk: {
        code: string;
        symbol: string;
        name: string;
    };
    vi: {
        code: string;
        symbol: string;
        name: string;
    };
    yi: {
        code: string;
        symbol: string;
        name: string;
    };
    zh: {
        code: string;
        symbol: string;
        name: string;
    };
};
export declare type ILanguageCode = keyof typeof Languages;
/**
 * Operating system flag
 */
export declare type IOperatingSystem = {
    type: "mac" | "windows" | "linux";
    supported: boolean | "PLANNED";
};
//# sourceMappingURL=ItemTypes.d.ts.map