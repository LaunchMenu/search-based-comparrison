import {IDataItem, IOperatingSystem, IPlannableItem, ISite} from "./ItemTypes";
export type IApplicationInfo = {
    // PROJECT INFORMATION

    /** The name of the application */
    applicationName: string;

    /**
     * Is development active, passive or discontinued:
     *   * Active       - New features actively pursued
     *   * Passive      - Accepting pull requests, not working on application otherwise
     *   * Discontinued - Not working on project at all
     */
    applicationStatus: IDataItem<"Active" | "Passive" | "Discontinued">;

    /**
     * List of sites of interest. E.G. Main site / Github / ...
     */
    sites: ISite[];

    /**
     * Pricing of software
     */
    cost: IDataItem<string>;

    /**
     * Code source visibility
     */
    sourceType: IDataItem<"Open Source" | "Closed Source">;

    /**
     * Which operating systems the application is compatible with?
     */
    operatingSystems: IOperatingSystem[];

    // PROJECT ACTIVITY
    /** Version of last release */
    lastReleaseVersion: IDataItem<string>;
    /** Date of last release */
    lastReleaseDate: IDataItem<Date>;
    /** Date of last update / commit. Note in some cases this will be the same as the release date and usually just gives an indication of project activity */
    lastCommit: IDataItem<Date>;
    /** Framework / Language the application is built in */
    applicationFramework: IDataItem<string>;
    /** Whether executables are provided indicates ease of install */
    executableReleasesProvided: IPlannableItem<boolean>;

    // EXTENSION SYSTEM
    /** Does the software have plugin support */
    hasPluginSupport: IPlannableItem<boolean>;
    /**
     * Does the software have a plugin manager, to install and remove plugins
     */
    hasPluginManager: IPlannableItem<boolean>;
    /** What is the plugin system designed in? What will devs use to create applets? E.G. "Electron TypeScript React Emotion" */
    pluginFramework: IDataItem<string>;

    // CONTENT PANE
    // The content pane typically appears to the right of the menu of items and displays content about the selected item.
    /** Does the software have a content / preview pane */
    hasContentPane: IPlannableItem<boolean>;
    /** Is it possible to interact with the data/items in the content pane? If not present by default can plugins add this feature easily? */
    canHaveFunctionalContent: IPlannableItem<boolean>;

    // LOW LEVEL IMPLEMENTATION
    /**
     * Can menu items contain recursive folders / submenus?
     *   I.E. Can you have an item which has children, which can also have children, which can also have children ...
     * Many applications only have 1 layer of recursion. I.E. An item can have children, but those children can't have children.
     *   If this is the case for your application, please use `false` or `{value: false, tooltip:"..."}`
     */
    recursiveItemFolders: IPlannableItem<boolean>;
    /**
     * Do items have the possibility to execute multiple executable actions?
     */
    itemsHaveMultipleActions: IPlannableItem<boolean>;
    /**
     * Can you apply an action across multiple items?
     *   Please add a tooltip if your application executes the same action on items in a series, as this can lead to issues.
     */
    applyActionsAcrossMultipleItems: IPlannableItem<boolean>;
    /**
     * Are submenus AND context menus in your application searchable?
     */
    searchableSubMenusAndContextMenus: IPlannableItem<boolean>;

    /**
     * Can plugins add additional actions to menu items which aren't from the same plugin?
     */
    pluginsCanCustomiseOtherPluginsItemActions: IPlannableItem<boolean>;

    /**
     * Are menu item's position in the list prioritised based on how often they are used?
     *   If true, commonly used items will appear towards the top of the menu
     */
    prioritisedSearchingOnUse: IPlannableItem<boolean>;

    /**
     * Does a system exist to search for files based on their name/path?
     */
    fileSearch: IPlannableItem<boolean>;

    /**
     * Does a system exist to search for files based on their contents
     */
    searchFileContents: IPlannableItem<boolean>;

    /**
     * Does the application integrate with existing File System explorers on the OS
     * e.g. Explorer.exe / Finder.app
     * This may involve:
     *   * Searching in the previous explorer window's folder
     *   * Copy from application to native explorer window
     *   * ...
     * Typically these are advanced features
     */
    nativeFileSystemIntegration: IPlannableItem<boolean>;

    /**
     * Is the file system search mechanism indexed?
     * If the system isn't then it will have to search through all files on the disk to find the item in question which can be slow.
     * Indexed file systems are typically faster, but much more complicated
     */
    isFileSystemIndexed: IPlannableItem<boolean>;

    /**
     * File system regex search allows users to search their file system for files with names/paths matching a regex expression.
     * @new
     */
    hasFileSystemPatternSearch: IPlannableItem<boolean>;

    /**
     * File content regex search allows users to search their file system for files with content which matches a regex expression.
     * @new
     */
    hasFileContentPatternSearch: IPlannableItem<boolean>;

    /**
     * File structures are implementable systems such that multiple files can be represented as a single menu item. E.G. Some file types such as Shape files:
     *   some/file.shp
     *   some/file.dbf
     * The hope is that this can be seen as a single menu item in the search software (given the correct plugin is installed), rather than as 2 files
     * @new
     */
    hasFileStructures: IPlannableItem<boolean>;

    /**
     * Web search allows launching of websites given a query input. I.E
     *   `Google my query` ==> Open http://google.com?q=my%20query in default browser
     * @new
     */
    webSearch: IPlannableItem<boolean>;
    /**
     * A customisable web search is one which allows users to use custom URLs.
     * @new
     */
    webSearchIsCustomisable: IPlannableItem<boolean>;
    /**
     * Web bookmark search, searches the bookmarks for the browsers installed on the system. Bookmarks are then launchable from the application.
     * @new
     */
    webBookmarkSearch: IPlannableItem<boolean>;

    /**
     * Any outstanding remarks
     */
    remarks?: string;
};
