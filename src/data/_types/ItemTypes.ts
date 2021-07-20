/**
 * Item status <T>. Can also contain some special values indicate other situations:
 *   N/A     - A feature can't be implemented because a dependency is missing.
 *   TBC     - Feature status is "To be confirmed"
 */
export type IValue<T> = T | "N/A" | "TBC" | "PREMIUM";
export type IRawDataItem<T> = IValue<T> | {value: IValue<T>; tooltip: string};
export type IDataItem<T> =
    | IRawDataItem<T>
    | (() => Promise<IRawDataItem<T>> | IRawDataItem<T>);

/**
 * Item status <T>. Can also contain some special values indicate other situations:
 *   ShortTermPlan - Feature is planned / currently being worked on / Is a short way of being complete.
 *   LongTermPlan  - Feature is planned but ETA is in far future / not high priority for core dev team.
 *   N/A     - A feature can't be implemented because a dependency is missing.
 *   TBC     - Feature status is "To be confirmed"
 */
export type IPlannableItem<T> = IDataItem<T | "PlannedShortTerm" | "PlannedLongTerm">;

/**
 * A useful link required during comparison
 */
export type ISite = {type: "main" | "github" | string; url: string};

export const Languages = {
    ar: {code: "ar", symbol: "[AR]", name: "Arab"},
    be: {code: "be", symbol: "🇧🇾", name: "Belarusian"},
    ca: {code: "ca", symbol: "[CA]", name: "Catalan"},
    cs: {code: "cs", symbol: "🇨🇿", name: "Czech"},
    da: {code: "da", symbol: "🇩🇰", name: "Danish"},
    de: {code: "de", symbol: "🇩🇪", name: "German"},
    en: {code: "en", symbol: "🇺🇸", name: "English"},
    eo: {code: "eo", symbol: "[EO]", name: "Esperanto"},
    es: {code: "es", symbol: "🇪🇸", name: "Spanish"},
    et: {code: "et", symbol: "🇪🇪", name: "Estonian"},
    fa: {code: "fa", symbol: "🇮🇷", name: "Persian"},
    fi: {code: "fi", symbol: "🇫🇮", name: "Finnish"},
    fr: {code: "fr", symbol: "🇫🇷", name: "French"},
    ga: {code: "ga", symbol: "🇮🇪", name: "Irish"},
    he: {code: "he", symbol: "🇮🇱", name: "Hebrew"},
    hi: {code: "hi", symbol: "🇮🇳", name: "Hindi"},
    hu: {code: "hu", symbol: "🇭🇺", name: "Hungarian"},
    id: {code: "id", symbol: "🇮🇩", name: "Indonesian"},
    is: {code: "is", symbol: "🇮🇸", name: "Icelandic"},
    it: {code: "it", symbol: "🇮🇹", name: "Italian"},
    ja: {code: "ja", symbol: "🇯🇵", name: "Japanese"},
    kk: {code: "kk", symbol: "🇰🇿", name: "Kazakh"},
    ko: {code: "ko", symbol: "🇰🇷", name: "Korean"},
    ky: {code: "ky", symbol: "🇰🇬", name: "Kyrgyz"},
    lt: {code: "lt", symbol: "🇱🇹", name: "Lithuanian"},
    lv: {code: "lv", symbol: "🇱🇻", name: "Latvian"},
    nl: {code: "nl", symbol: "🇳🇱", name: "Dutch"},
    no: {code: "no", symbol: "🇳🇴", name: "Norwegian"},
    pl: {code: "pl", symbol: "🇵🇱", name: "Polish"},
    pt: {code: "pt", symbol: "🇵🇹", name: "Portuguese"},
    ro: {code: "ro", symbol: "🇷🇴", name: "Romanian"},
    ru: {code: "ru", symbol: "🇷🇺", name: "Russian"},
    sk: {code: "sk", symbol: "🇸🇰", name: "Slovak"},
    sl: {code: "sl", symbol: "🇸🇮", name: "Slovenian"},
    sv: {code: "sv", symbol: "🇸🇪", name: "Swedish"},
    th: {code: "th", symbol: "🇹🇭", name: "Thai"},
    tr: {code: "tr", symbol: "🇹🇷", name: "Turkish"},
    uk: {code: "uk", symbol: "🇺🇦", name: "Ukrainian"},
    vi: {code: "vi", symbol: "🇻🇳", name: "Vietnamese"},
    yi: {code: "yi", symbol: "[YI]", name: "Yiddish"},
    zh: {code: "zh", symbol: "🇨🇳", name: "Chinese"},
};

export type ILanguageCode = keyof typeof Languages;

/**
 * Operating system flag
 */
export type IOperatingSystem = {
    type: "mac" | "windows" | "linux";
    supported: boolean | "PLANNED";
};
