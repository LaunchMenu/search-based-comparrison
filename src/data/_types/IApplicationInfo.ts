import {
    IDataItem,
    ILanguageCode,
    IOperatingSystem,
    IPlannableItem,
    ISite,
} from "./ItemTypes";
export type IApplicationInfo = {
    // ***********************
    // * PROJECT INFORMATION *
    // ***********************

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
    applicationWebSites: ISite[];

    /**
     * Pricing of software
     */
    applicationCost: IDataItem<string>;

    /**
     * Code source visibility
     */
    applicationSourceType: IDataItem<"Open Source" | "Closed Source">;

    /**
     * Which operating systems the application is compatible with?
     */
    applicationOperatingSystemsSupported: IOperatingSystem[];

    /** Version of last release */
    applicationLastReleaseVersion: IDataItem<string>;
    /** Date of last release */
    applicationLastReleaseDate: IDataItem<Date>;
    /** Date of last update / commit. Note in some cases this will be the same as the release date and usually just gives an indication of project activity */
    applicationLastCommitDate: IDataItem<Date>;
    /** Framework / Language the application is built in */
    applicationFramework: IDataItem<string>;

    /** A rough estimate from typical usage of application */
    applicationRAMUsage: IDataItem<string | number>;

    // *******************
    // * USER EXPERIENCE *
    // *******************

    /**
     *  Whether executables are provided indicates ease of install
     */
    uxInstallersProvided: IPlannableItem<boolean>;

    /**
     * Does the application have an introductory screen? Introductory screens can help you get started with the application.
     */
    uxIntroductionScreen: IPlannableItem<boolean>;

    /**
     * A rating of the documentation for users
     * 1. Documentation doesn't exist
     * 2. Documentation exists but is either difficult to find or covers very few features.
     * 3. Documentation exists, is easy to find, adequate feature coverage.
     * 4. Documentation exists, is easy to find, adequate feature coverage, with good use of key-display, diagrams, screenshots and videos
     * 5. Documentation exists, is easy to find, total feature coverage, with good use of key-display, diagrams, screenshots and videos
     */
    uxUserDocumentationRating: IPlannableItem<1 | 2 | 3 | 4 | 5 | "TBC">;

    /**
     * Does the application use a fuzzy searching algorithm to find search results, or does it only search for names that are 100% matches
     */
    uxFuzzySearch: IPlannableItem<boolean>;

    /**
     * Sometimes it can be difficult to know how a search matched the query you entered. Search
     * highlights help this usability.
     */
    uxSearchHighlights: IPlannableItem<boolean>;

    /**
     * Languages indicate that the application can offer the same functionality in other languages, easing use for users of other nationalities.
     */
    uxLanguagesSupported: ILanguageCode[];

    /**
     * An undo/redo system allows actions to be undoable and redoable. An application which supports this
     * can allow users to make mistakes, without leaving it up to the user to resolve them.
     */
    uxHasUndoRedo: IPlannableItem<boolean>;

    // PLUGIN/EXTENSION/APPLET SYSTEM
    /** Does the software have plugin support */
    pluginsAreSupported: IPlannableItem<boolean>;
    /**
     * Does the software have a plugin manager, to install and remove plugins
     */
    pluginsManagerAvailable: IPlannableItem<boolean>;
    /** What is the plugin system designed in? What will devs use to create applets? E.G. "Electron TypeScript React Emotion" */
    pluginsFramework: IDataItem<string>;

    /**
     * A rating of the documentation for plugin developers
     * 1. Documentation doesn't exist
     * 2. Documentation exists but is either difficult to find or covers very few features.
     * 3. Documentation exists, is easy to find, adequate feature coverage.
     * 4. Documentation exists, is easy to find, adequate feature coverage, with good use of key-display, diagrams, screenshots and videos
     * 5. Documentation exists, is easy to find, total feature coverage, with good use of key-display, diagrams, screenshots and videos
     */
    pluginsDocumentationRating: IPlannableItem<1 | 2 | 3 | 4 | 5 | "TBC">;

    // ****************
    // * CONTENT PANE *
    // ****************
    // The content pane typically appears to the right of the menu of items and displays content about the selected item.

    /**
     * Does the software have a content / preview pane
     */
    contentPaneExists: IPlannableItem<boolean>;

    /**
     * Is it possible to interact with the data/items in the content pane? If not present by default can plugins add this feature easily?
     */
    contentPaneFunctionalContent: IPlannableItem<boolean>;

    // ****************************
    // * LOW LEVEL IMPLEMENTATION *
    // ****************************

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
     * Does the application use the ability to insert text directly into the caret location.
     *   * In launchmenu we do this by copying some text to the clipboard and inserting it directly.
     *   * Other systems may use accessibility or other means to insert text into the top application
     */
    hasTextInsertion: IPlannableItem<boolean>;

    /**
     * Does the application have the capability to "instant send". This feature takes the currently selected item/text in another
     * application and performs a search / action search based on the selected item.
     */
    hasInstantSend: IPlannableItem<boolean>;

    /**
     * Key combination which shows mnemonics above UI elements for quick access.
     */
    hasInAppMnemonics: IPlannableItem<boolean>;

    /**
     * Key combination which shows mnemonics above UI elements of the active window for quick access.
     */
    hasGlobalMnemonics: IPlannableItem<boolean>;

    /**
     * Provides the previously active window info for extra context for plugins/applets etc.
     */
    hasSearchesOnActiveWindowContext: IPlannableItem<boolean>;

    // ***************
    // * FILE SEARCH *
    // ***************

    /**
     * Does a system exist to search for files based on their name/path?
     */
    fileSearchExists: IPlannableItem<boolean>;

    /**
     * Does a system exist to search for files based on their contents
     */
    fileSearchCanSearchFileContents: IPlannableItem<boolean>;

    /**
     * Does the application integrate with existing File System explorers on the OS
     * e.g. Explorer.exe / Finder.app
     * This may involve:
     *   * Searching in the previous explorer window's folder
     *   * Copy from application to native explorer window
     *   * ...
     * Typically these are advanced features
     */
    fileSearchIntegratesWithNativeFileSystem: IPlannableItem<boolean>;

    /**
     * Is the file system search mechanism indexed?
     * If the system isn't then it will have to search through all files on the disk to find the item in question which can be slow.
     * Indexed file systems are typically faster, but much more complicated
     */
    fileSearchIsIndexed: IPlannableItem<boolean>;

    /**
     * File system regex search allows users to search their file system for files with names/paths matching a regex expression.
     */
    fileSearchHasPatternSearch: IPlannableItem<boolean>;

    /**
     * File content regex search allows users to search their file system for files with content which matches a regex expression.
     */
    fileSearchHasContentPatternSearch: IPlannableItem<boolean>;

    /**
     * File structures are implementable systems such that multiple files can be represented as a single menu item. E.G. Some file types such as Shape files:
     *   some/file.shp
     *   some/file.dbf
     * The hope is that this can be seen as a single menu item in the search software (given the correct plugin is installed), rather than as 2 files
     */
    fileSearchHasFileStructures: IPlannableItem<boolean>;

    /**
     * Are the roots in which the file system searches configurable?
     */
    fileSearchHasConfigurableRoots: IPlannableItem<boolean>;

    // **************
    // * WEB SEARCH *
    // **************

    /**
     * Web search allows launching of websites given a query input. I.E
     *   `Google my query` ==> Open http://google.com?q=my%20query in default browser
     */
    webSearch: IPlannableItem<boolean>;
    /**
     * A customisable web search is one which allows users to use custom URLs.
     */
    webSearchIsCustomisable: IPlannableItem<boolean>;

    // *************
    // * BOOKMARKS *
    // *************

    /**
     * Web bookmark search, searches the bookmarks for the browsers installed on the system. Bookmarks are then launchable from the application.
     */
    webBookmarkSearch: IPlannableItem<boolean>;

    // ************
    // * SETTINGS *
    // ************
    /**
     * What's the style of the configuration management within the application?
     * * N/A - No application configuration
     * * TBC - To be confirmed
     * * Text-Based - Changing settings involves changing text in a config file
     * * Menu-Based - Changing settings involves reusing the same system the search system already uses.
     * * GUI-based - Changing settings launches a seperate GUI users can use to modify settings.
     */
    settingsStyle: "N/A" | "TBC" | "Text-Based" | "Menu-Based" | "GUI-Based";

    /**
     * Can you import and export the settings?
     */
    settingsArePortable: IPlannableItem<boolean>;

    // ***********
    // * THEMING *
    // ***********

    /**
     * Can themes change the colors of the application?
     */
    themesCanChangeColors: IPlannableItem<boolean>;

    /**
     * Can themes change the layout of the application?
     */
    themesCanChangeLayout: IPlannableItem<boolean>;

    // **************
    // * Calculator *
    // **************
    /**
     * Does a calculator applet/plugin/feature exist?
     */
    calculatorExists: IPlannableItem<boolean>;

    /**
     * Does the application use traditional math syntax. E.G.
     *  If you syntax looks like:  5!+sin(30)^3 then that's okay
     *
     */
    calculatorParserType: "eval" | "custom" | "mathjs" | "TBC" | "N/A";
    calculatorSupportsUnits: IPlannableItem<boolean>;
    calculatorSupportsUnitConversions: IPlannableItem<boolean>;
    calculatorHasForwardBracketRecovery: IPlannableItem<boolean>;
    calculatorHasBackwardBracketRecovery: IPlannableItem<boolean>;
    calculatorHasNumberFormats: IPlannableItem<boolean>;
    calculatorOperatorList: string[];
    calculatorIsExtendable: IPlannableItem<boolean>;
    calculatorSupportsCustomDecimalSeperator: IPlannableItem<boolean>;
    calculatorSupportsCustomThousandsSeperator: IPlannableItem<boolean>;

    // **********
    // * IMAGES *
    // **********
    imageMain: string;
    imageSearch: string;
    imageSettings: string;
    imageFileSearch: string;
    imageCalculator: string;
    imagesMisc: string[];

    //Additional comparrisons:
    /**
     * TODO: Session manager equivalent (LM, alfred has an asterisk because File manager opens in a seperate window, maybe can have search open at the same time)
     * TODO: LM Recorder equivalent
     * TODO: SettingsAreSearchable (Alfred has searchable settings, So does LM)
     * TODO: User scripts?
     * TODO: Translator
     * TODO: Snippets
     * TODO: Time tracker?
     * TODO: Calendar?
     */

    /**
     * Any outstanding remarks
     */
    remarks?: string;
};
