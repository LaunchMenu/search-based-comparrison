import { IDataItem, IOperatingSystem, IPlannableItem, ISite } from "./ItemTypes";
export declare type IApplicationInfo = {
    applicationName: string;
    applicationStatus: IDataItem<"Active" | "Passive" | "Discontinued">;
    sites: ISite[];
    cost: IDataItem<string>;
    sourceType: IDataItem<"Open Source" | "Closed Source">;
    operatingSystems: IOperatingSystem[];
    remarks: string;
    lastReleaseVersion: IDataItem<string>;
    lastReleaseDate: IDataItem<Date>;
    lastCommit: IDataItem<Date>;
    applicationFramework: IDataItem<string>;
    executableReleasesProvided: IPlannableItem<boolean>;
    hasExtensions: IPlannableItem<boolean>;
    pluginFramework: IDataItem<string>;
    hasContentPane: IPlannableItem<boolean>;
    canHaveFunctionalContent: IPlannableItem<boolean>;
    recursiveItemFolders: IPlannableItem<boolean>;
    itemsHaveMultipleActions: IPlannableItem<boolean>;
    applyActionsAcrossMultipleItems: IPlannableItem<boolean>;
    searchableSubMenusAndContextMenus: IPlannableItem<boolean>;
    fileSearch: IPlannableItem<boolean>;
    searchFileContents: IPlannableItem<boolean>;
    nativeFileSystemIntegration: IPlannableItem<boolean>;
    isFileSystemIndexed: IPlannableItem<boolean>;
};
//# sourceMappingURL=IApplicationInfo.d.ts.map