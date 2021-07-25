import {
    getGitLastCommitOn,
    getGitLastReleaseDate,
    getGitLastReleaseVersion,
} from "./dynamicData/git";
import {IApplicationInfo} from "./_types/IApplicationInfo";

export let data: IApplicationInfo[] = [
    {
        applicationName: "LaunchMenu",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "main", url: "https://launchmenu.github.io/"},
            {type: "github", url: "https://github.com/launchmenu/launchmenu"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [
            {type: "mac", supported: true},
            {type: "windows", supported: true},
            {type: "linux", supported: "PLANNED"},
        ],
        applicationLastReleaseVersion: () =>
            getGitLastReleaseVersion("launchmenu/launchmenu"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("launchmenu/launchmenu"),
        applicationLastCommitDate: () => getGitLastCommitOn("launchmenu/launchmenu"),
        applicationFramework: "Electron TypeScript React",
        applicationRAMUsage: {
            value: "100MB",
            tooltip:
                "Important to note that LM currently doesn't have a FileSystem which will likely alter this value",
        },

        //Usability
        uxInstallersProvided: true,
        uxIntroductionScreen: true,
        uxUserDocumentationRating: {
            value: 4,
            tooltip: "The home page gives a detailed overview of most LM features",
        },
        uxFuzzySearch: true,
        uxSearchHighlights: true,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: {value: "PlannedShortTerm", tooltip: "System exists, no UI."},

        //Plugin system
        pluginsAreSupported: true,
        pluginsManagerAvailable: "PlannedShortTerm",
        pluginsFramework: "TypeScript React",
        pluginsDocumentationRating: 4,
        pluginsCanCustomiseOtherPluginsItemActions: {
            value: "PlannedLongTerm", //via https://github.com/LaunchMenu/LaunchMenu/issues/157
            tooltip:
                "Is possible, isn't recommended. LM Applets provide an API where this can be done more easily.",
        },

        //Content pane
        contentPaneExists: true,
        contentPaneFunctionalContent: true,

        // LOW LEVEL IMPLEMENTATION
        recursiveItemFolders: true,
        itemsHaveMultipleActions: true,
        applyActionsAcrossMultipleItems: true,
        searchableSubMenusAndContextMenus: true,

        prioritisedSearchingOnUse: "PlannedLongTerm",
        hasTextInsertion: {
            value: true,
            tooltip: "Currently using copy-exit-paste handler",
        },
        hasInstantSend: "PlannedLongTerm",
        hasInAppMnemonics: "PlannedLongTerm",
        hasGlobalMnemonics: "PlannedLongTerm",
        hasSearchesOnActiveWindowContext: "PlannedLongTerm",

        //FILE SEARCH
        fileSearchExists: "PlannedLongTerm",
        fileSearchCanSearchFileContents: "PlannedLongTerm",
        fileSearchIntegratesWithNativeFileSystem: {
            value: false,
            tooltip: "Not a priority",
        },
        fileSearchIsIndexed: "PlannedLongTerm",
        fileSearchHasPatternSearch: "PlannedLongTerm",
        fileSearchHasContentPatternSearch: "PlannedLongTerm",
        fileSearchHasFileStructures: "PlannedLongTerm",
        fileSearchHasConfigurableRoots: "PlannedLongTerm",

        //WEB SEARCH
        webSearch: "PlannedShortTerm",
        webSearchIsCustomisable: "PlannedShortTerm",

        //BOOKMARKS
        webBookmarkSearch: {
            value: false,
            tooltip: "Not a priority. Should be easy to build though.",
        },

        //SETTINGS
        settingsStyle: "Menu-Based",
        settingsArePortable: {
            value: "PlannedShortTerm",
            tooltip:
                "You can manually copy the settings folder, but currently no UI available for this.",
        },

        //THEMES
        themesCanChangeColors: {
            value: "PlannedShortTerm",
            tooltip: "System exists, no UI yet.",
        },
        themesCanChangeLayout: {
            value: false,
            tooltip: "Can be accomplished via applets which replace SessionManager",
        },

        //Images
        imageMain: "LaunchMenu/1. Main.png",
        imageSearch: "LaunchMenu/2. Search.png",
        imageSettings: "LaunchMenu/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: "PlannedShortTerm",
        calculatorParserType: "mathjs",
        calculatorSupportsUnits: "PlannedShortTerm",
        calculatorSupportsUnitConversions: "PlannedShortTerm",
        calculatorHasForwardBracketRecovery: {
            value: "PlannedShortTerm",
            tooltip: "Simple bracket recovery",
        },
        calculatorHasBackwardBracketRecovery: {
            value: "PlannedShortTerm",
            tooltip: "Simple bracket recovery",
        },
        calculatorHasNumberFormats: "PlannedShortTerm",
        calculatorOperatorList: "+,-,/,*,!,%,^,in".split(","),
        calculatorIsExtendable: "PlannedLongTerm",
        //Custom decimal seperator
        //https://mathjs.org/examples/browser/custom_separators.html
        //https://mathjs.org/examples/browser/custom_separators.html.html
        calculatorSupportsCustomDecimalSeperator: "PlannedShortTerm",
        calculatorSupportsCustomThousandsSeperator: "TBC",

        //Final remarks
        remarks: "",
    },
    {
        applicationName: "cerebro",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "main", url: "https://cerebroapp.com/"},
            {type: "github", url: "https://github.com/cerebroapp/cerebro"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [
            {type: "mac", supported: true},
            {type: "windows", supported: true},
            {type: "linux", supported: true},
        ],
        remarks: "",
        applicationLastReleaseVersion: () =>
            getGitLastReleaseVersion("cerebroapp/cerebro"),
        applicationLastReleaseDate: async () => {
            return {
                value: await getGitLastReleaseDate("cerebroapp/cerebro"),
                tooltip: "Was discontinued in 2017. Recently been revived in 2021",
            };
        },
        applicationLastCommitDate: () => getGitLastCommitOn("cerebroapp/cerebro"),
        applicationFramework: "Electron JavaScript React",
        applicationRAMUsage: "300MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 1,
        uxFuzzySearch: true,
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: {value: true, tooltip: "Not working on 17 Jul 2021"},
        pluginsFramework: "JavaScript",
        pluginsDocumentationRating: 3,

        contentPaneExists: true,
        contentPaneFunctionalContent: true,
        recursiveItemFolders: {
            value: false,
            tooltip:
                "Only 1 level of recursion exists in cerebro. You can step into an item which allows it to display in the preview pane, however you cannot step in infinitely.",
        },
        itemsHaveMultipleActions: true,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: false,
        pluginsCanCustomiseOtherPluginsItemActions: false,
        prioritisedSearchingOnUse: false,
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: {value: true, tooltip: "Non-default plugin"},
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: false,
        fileSearchHasPatternSearch: true,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: false,

        webSearch: {
            value: false,
            tooltip:
                "There exists an applet named \"web search\" however I couldn't install or test it to guarantee it's the same thing.",
        },
        webSearchIsCustomisable: "N/A",
        webBookmarkSearch: false,

        //SETTINGS
        settingsStyle: "Menu-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: {
            value: false,
            tooltip: "Does at least provide a dark/light theme",
        },
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "cerebro/1. Main.png",
        imageSearch: "cerebro/2. Search.png",
        imageSettings: "cerebro/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "eval",
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: false,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: false,
        calculatorOperatorList: "+,-,/,*,**".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: "TBC",
        calculatorSupportsCustomThousandsSeperator: "TBC",
    },
    {
        applicationName: "Zazu",
        applicationStatus: "Discontinued",
        applicationWebSites: [
            {type: "main", url: "http://zazuapp.org/"},
            {type: "github", url: "https://github.com/bayleeadamoss/zazu"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [
            {type: "mac", supported: true},
            {type: "windows", supported: true},
            {type: "linux", supported: true},
        ],
        remarks: "",
        applicationLastReleaseVersion: () =>
            getGitLastReleaseVersion("bayleeadamoss/zazu"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("bayleeadamoss/zazu"),
        applicationLastCommitDate: () => getGitLastCommitOn("bayleeadamoss/zazu"),
        applicationFramework: "Electron",
        applicationRAMUsage: "160MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 2,
        uxFuzzySearch: true,
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: true,
        pluginsFramework: "JavaScript",
        pluginsDocumentationRating: 3,

        contentPaneExists: true,
        contentPaneFunctionalContent: false,
        recursiveItemFolders: false,
        itemsHaveMultipleActions: false,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: false,
        pluginsCanCustomiseOtherPluginsItemActions: false,
        prioritisedSearchingOnUse: false,
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: {value: true, tooltip: "No folders"},
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: {
            value: true,
            tooltip: "Appears to be O(n) as it's just a virtual cache",
        },
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: false,

        webSearch: true,
        webSearchIsCustomisable: false,
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "Text-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: false,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "Zazu/1. Main.png",
        imageSearch: "Zazu/2. Search.png",
        imageSettings: "Zazu/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "mathjs",
        calculatorSupportsUnits: true,
        calculatorSupportsUnitConversions: true,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: true,
        calculatorOperatorList: "+,-,/,*,!,^,in".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: false,
        calculatorSupportsCustomThousandsSeperator: false,
    },

    {
        applicationName: "Launchy",
        applicationStatus: "Discontinued",
        applicationWebSites: [{type: "main", url: "http://www.launchy.net/"}],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [
            {type: "mac", supported: true},
            {type: "windows", supported: true},
            {type: "linux", supported: true},
        ],
        remarks:
            "Launchy has crashed a few times on me in short use of the software. Additionally file search is laggy.",
        applicationLastReleaseVersion: {
            value: "2.6 Beta 2",
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastReleaseDate: {
            value: new Date("25-Aug-10"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastCommitDate: {
            value: new Date("25-Aug-10"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationFramework: "C++ (Qt)",
        applicationRAMUsage: "35MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 1,
        uxFuzzySearch: false,
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: true,
        pluginsFramework: "C QT",
        pluginsDocumentationRating: 2,

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: false,
        itemsHaveMultipleActions: false,
        applyActionsAcrossMultipleItems: "N/A",
        searchableSubMenusAndContextMenus: "N/A",
        pluginsCanCustomiseOtherPluginsItemActions: "N/A",
        prioritisedSearchingOnUse: false,
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: false, //Doesn't feel like it at least
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: true,

        webSearch: true,
        webSearchIsCustomisable: true,
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: true,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "Launchy/1. Main.png",
        imageSearch: "Launchy/2. Search.png",
        imageSettings: "Launchy/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "custom",
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: false,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: false,
        calculatorOperatorList: "+,-,/,*".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: false,
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        applicationName: "Arvis",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "github", url: "https://github.com/jopemachine/arvis"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [
            {type: "mac", supported: true},
            {type: "windows", supported: true},
            {type: "linux", supported: true},
        ],
        remarks: "Calculator also supports booleans, logic and matrices",
        applicationLastReleaseVersion: () =>
            getGitLastReleaseVersion("jopemachine/arvis"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("jopemachine/arvis"),
        applicationLastCommitDate: () => getGitLastCommitOn("jopemachine/arvis"),
        applicationFramework: "Electron TypeScript React",
        applicationRAMUsage: "493MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 2,
        uxFuzzySearch: false,
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: true,
        pluginsFramework: "TypeScript",
        pluginsDocumentationRating: 2,

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: false,
        itemsHaveMultipleActions: false,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: false,
        pluginsCanCustomiseOtherPluginsItemActions: false,
        prioritisedSearchingOnUse: false,
        hasTextInsertion: false, //TODO: E.G. Arvise Emoji?
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        //https://github.com/jopemachine/arvis-filesearch-plugin
        fileSearchExists: true,
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: false, //appears to use https://github.com/mrmlnc/fast-glob which doesn't appear to use an index?
        fileSearchHasPatternSearch: {value: true, tooltip: "Does have glob patterns"},
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: true,

        //https://github.com/jopemachine/arvis-simple-websearch-plugin
        webSearch: true,
        webSearchIsCustomisable: true,

        //https://github.com/jopemachine/arvis-chrome-bookmark-plugin
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: true,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "Arvis/1. Main.png",
        imageSearch: "Arvis/2. Search.png",
        imageSettings: "Arvis/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "mathjs",
        calculatorSupportsUnits: true,
        calculatorSupportsUnitConversions: true,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: true,
        calculatorOperatorList: "+,-,/,*,!,^,in".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: false,
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        applicationName: "ueli",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "main", url: "https://ueli.app"},
            {type: "github", url: "https://github.com/oliverschwendener/ueli"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [
            {type: "mac", supported: true},
            {type: "windows", supported: true},
        ],
        remarks: "",
        applicationLastReleaseVersion: () =>
            getGitLastReleaseVersion("oliverschwendener/ueli"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("oliverschwendener/ueli"),
        applicationLastCommitDate: () => getGitLastCommitOn("oliverschwendener/ueli"),
        applicationFramework: "Electron TypeScript Vue",
        applicationRAMUsage: "240MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 2,
        uxFuzzySearch: true,
        uxSearchHighlights: false,
        uxLanguagesSupported: [
            "en",
            "de",
            "cs",
            "es",
            "ja",
            "ko",
            "pt",
            "ru",
            "tr",
            "zh",
        ],
        uxHasUndoRedo: false,

        pluginsAreSupported: false,
        pluginsManagerAvailable: {
            value: false,
            tooltip: "Can disable plugins, cannot install new plugins",
        },
        pluginsFramework: "N/A",
        pluginsDocumentationRating: "N/A",

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: true,
        itemsHaveMultipleActions: false,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: false,
        pluginsCanCustomiseOtherPluginsItemActions: "N/A",
        prioritisedSearchingOnUse: {
            value: true,
            tooltip: "Only seems to work for some plugins.",
        },
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: true,
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: true,

        webSearch: true,
        webSearchIsCustomisable: true,
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: true,

        //THEMES
        themesCanChangeColors: true,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "ueli/1. Main.png",
        imageSearch: "ueli/2. Search.png",
        imageSettings: "ueli/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "mathjs",
        calculatorSupportsUnits: true,
        calculatorSupportsUnitConversions: true,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: true,
        calculatorOperatorList: "+,-,/,*,!,^,in".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: false,
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        applicationName: "Hain",
        applicationStatus: "Discontinued",
        applicationWebSites: [
            {type: "main", url: "https://hainproject.github.io/hain/"},
            {type: "github", url: "https://github.com/hainproject/hain"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [
            {type: "mac", supported: true},
            {type: "windows", supported: true},
        ],
        remarks: "",
        applicationLastReleaseVersion: () => getGitLastReleaseVersion("hainproject/hain"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("hainproject/hain"),
        applicationLastCommitDate: () => getGitLastCommitOn("hainproject/hain"),
        applicationFramework: "Electron",
        applicationRAMUsage: "200MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: true,
        uxUserDocumentationRating: 3,
        uxFuzzySearch: true,
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: true,
        pluginsFramework: "Javascript",
        pluginsDocumentationRating: 3,

        contentPaneExists: true,
        contentPaneFunctionalContent: false,
        recursiveItemFolders: false,
        itemsHaveMultipleActions: false,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: false,
        pluginsCanCustomiseOtherPluginsItemActions: false,
        prioritisedSearchingOnUse: true,
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: true,
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: true,

        webSearch: true,
        webSearchIsCustomisable: true,
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: true,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "Hain/1. Main.png",
        imageSearch: "Hain/2. Search.png",
        imageSettings: "Hain/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "mathjs",
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: false,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: false,
        calculatorOperatorList: "+,-,/,*,^".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: false,
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        applicationName: "Keypirinha",
        applicationStatus: "Active",
        applicationWebSites: [{type: "main", url: "https://keypirinha.com/"}],
        applicationCost: "Free",
        applicationSourceType: {
            value: "Closed Source",
            tooltip: "Awaiting clarification",
        },
        applicationOperatingSystemsSupported: [{type: "windows", supported: true}],
        remarks:
            "Duplicate menu items exist and are common from installing multiple packages. Text based configuration can pose as a steep learning curve to non-technical users",
        applicationLastReleaseVersion: {
            value: "2.26",
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastReleaseDate: {
            value: new Date("08-Nov-20"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastCommitDate: {
            value: new Date("08-Nov-20"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationFramework: "Python",
        applicationRAMUsage: "25MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 4,
        uxFuzzySearch: true,
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: false,
        pluginsFramework: "Python",
        pluginsDocumentationRating: 4,
        pluginsCanCustomiseOtherPluginsItemActions: {
            value: true,
            tooltip: "To be confirmed: Should be possible with InstanceID(?)",
        },

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: false,
        itemsHaveMultipleActions: true, //ctrl+enter to display actions //keypirinha items also have right-click context menus for some reason
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: false, //actions menu is not searchable

        prioritisedSearchingOnUse: true,
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: {value: false, tooltip: "Only a guess from what i can tell"},
        fileSearchHasPatternSearch: {
            value: true,
            tooltip:
                "Regex search exists on everything module, but couldn't understand how to use it",
        }, //https://github.com/Keypirinha/Packages/blob/d18a84f6c9b2eafa9c414a11cad92a6405e5afc0/Everything/lib/everything_ipc.py#L204
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: true,

        webSearch: true,
        webSearchIsCustomisable: true, //text based configuration.
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "Text-Based",
        settingsArePortable: {value: false, tooltip: "Theoretically yes, but no UI yet."},

        //THEMES
        themesCanChangeColors: true,
        themesCanChangeLayout: true,

        //IMAGES
        imageMain: "Keypirinha/1. Main.png",
        imageSearch: "Keypirinha/2. Search.png",
        imageSettings: "Keypirinha/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "custom",
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: true,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: true,
        calculatorOperatorList: [],
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: true,
        calculatorSupportsCustomThousandsSeperator: true,
    },
    {
        applicationName: "Wox",
        applicationStatus: "Passive",
        applicationWebSites: [
            {type: "main", url: "http://www.wox.one/"},
            {type: "github", url: "https://github.com/Wox-launcher/Wox"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [{type: "windows", supported: true}],
        remarks: "",
        applicationLastReleaseVersion: () => getGitLastReleaseVersion("Wox-launcher/Wox"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("Wox-launcher/Wox"),
        applicationLastCommitDate: () => getGitLastCommitOn("Wox-launcher/Wox"),
        applicationFramework: "C#",
        applicationRAMUsage: "100MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 3,
        uxFuzzySearch: true,
        uxSearchHighlights: true,
        uxLanguagesSupported: [
            "en",
            "zh",
            "uk",
            "ru",
            "fr",
            "ja",
            "nl",
            "pl",
            "da",
            "de",
            "ko",
            "pt",
            "it",
            "no",
            "sk",
            "tr",
            "es",
            "he",
            "pt",
        ],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: true, //Type "wpm" in the search bar
        pluginsFramework: "C# or Python",
        pluginsDocumentationRating: 3,

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: false,
        itemsHaveMultipleActions: true, //ctrl+o to open menu containing options
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: true,
        pluginsCanCustomiseOtherPluginsItemActions: false,
        prioritisedSearchingOnUse: {
            value: false,
            tooltip: "Can set queries as topmost which can accomplish the same goal",
        },
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: false,
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: true,

        webSearch: true,
        webSearchIsCustomisable: true,
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: true,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "Wox/1. Main.png",
        imageSearch: "Wox/2. Search.png",
        imageSettings: "Wox/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true, //https://github.com/Wox-launcher/Wox/tree/master/Plugins/Wox.Plugin.Calculator
        calculatorParserType: "custom", //MagesEngine
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: false,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: false,
        calculatorOperatorList: "+,-,*,/,!".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: true,
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        //open listary with ctrl+ctrl or start typing in windows explorer
        applicationName: "Listary",
        applicationStatus: "Discontinued",
        applicationWebSites: [{type: "main", url: "https://www.listary.com/"}],
        applicationCost: "Free/£17.50",
        applicationSourceType: "Closed Source",
        applicationOperatingSystemsSupported: [{type: "windows", supported: true}],
        remarks: "",
        applicationLastReleaseVersion: {
            value: "Listary 6",
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastReleaseDate: {
            value: new Date("14-Oct-18"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastCommitDate: {
            value: new Date("14-Oct-18"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationFramework: "C",
        applicationRAMUsage: {
            value: "75MB",
            tooltip:
                "In theory total usage is around 180MB, given that Listary largely uses Windows Explorer functionality. However Explorer can't be closed anyway, so no matter what application you use you'll always have this overhead (unlike Spotlight on Mac). Therefore listed as 56MB.",
        },
        uxInstallersProvided: true,
        uxIntroductionScreen: true, //tutorial on first run
        uxUserDocumentationRating: 2, //tutorial was really all the documentation I noticed
        uxFuzzySearch: false,
        uxSearchHighlights: true,
        uxLanguagesSupported: [
            "ar",
            "cs",
            "da",
            "de",
            "en",
            "es",
            "fr",
            "hu",
            "id",
            "it",
            "ja",
            "ko",
            "nl",
            "pl",
            "pt",
            "ro",
            "ru",
            "sl",
            "tr",
            "uk",
            "zh",
        ],
        uxHasUndoRedo: false,

        pluginsAreSupported: false,
        pluginsManagerAvailable: "N/A",
        pluginsFramework: "N/A",
        pluginsDocumentationRating: "N/A",

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: {
            value: false,
            tooltip: "Recursive folders are technically allowed in the context menu",
        },
        itemsHaveMultipleActions: true,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: true,
        pluginsCanCustomiseOtherPluginsItemActions: "N/A",
        prioritisedSearchingOnUse: false,
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: true,
        fileSearchIsIndexed: true,
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: true,

        webSearch: true, //keywords
        webSearchIsCustomisable: true,
        webBookmarkSearch: false,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: true,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "Listary/1. Main.png",
        imageSearch: "Listary/2. Search.png",
        imageSettings: "Listary/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: false,
        calculatorParserType: "N/A",
        calculatorSupportsUnits: "N/A",
        calculatorSupportsUnitConversions: "N/A",
        calculatorHasForwardBracketRecovery: "N/A",
        calculatorHasBackwardBracketRecovery: "N/A",
        calculatorHasNumberFormats: "N/A",
        calculatorOperatorList: [],
        calculatorIsExtendable: "N/A",
        calculatorSupportsCustomDecimalSeperator: "N/A",
        calculatorSupportsCustomThousandsSeperator: "N/A",
    },
    {
        applicationName: "FluentSearch",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "main", url: "https://www.fluentsearch.net/"},
            {type: "github", url: "https://github.com/adirh3/Fluent-Search"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Closed Source",
        applicationOperatingSystemsSupported: [{type: "windows", supported: true}],
        remarks: "Found .NET framework while inspecting exe in text file.",
        applicationLastReleaseVersion: {
            value: "0.9.86.0",
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastReleaseDate: {
            value: new Date("22-Jun-21"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastCommitDate: {
            value: new Date("22-Jun-21"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationFramework: "C#-SkiaSharp",
        applicationRAMUsage: "125MB", //Amazingly small, most of it's indexing is on-disk in BLAST\FluentSearch.db
        uxInstallersProvided: true,
        uxIntroductionScreen: {
            value: false,
            tooltip: "Has a screen at the beginning, but no help on this screen.",
        },
        uxUserDocumentationRating: 3,
        uxFuzzySearch: false,
        uxSearchHighlights: true,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: true, //a little difficult to spot this
        pluginsFramework: "C#",
        pluginsDocumentationRating: 1, //couldn't find any docs?

        contentPaneExists: true,
        contentPaneFunctionalContent: true,
        recursiveItemFolders: false, //can step into 1 application, but can't recursively step into folders
        itemsHaveMultipleActions: true,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: false,
        pluginsCanCustomiseOtherPluginsItemActions: "N/A",
        prioritisedSearchingOnUse: {
            value: true,
            tooltip: "need to enable in the settings",
        }, //auto-create search mappings
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: true, //Ctrl+M
        hasSearchesOnActiveWindowContext: true, //Prioritization > Prioritize results from focused app

        fileSearchExists: true,
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: true,
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: true,

        webSearch: true,
        webSearchIsCustomisable: true,
        webBookmarkSearch: false,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: "TBC",

        //THEMES
        themesCanChangeColors: {value: false, tooltip: "Only light and dark theme."},
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "FluentSearch/1. Main.png",
        imageSearch: "FluentSearch/2. Search.png",
        imageSettings: "FluentSearch/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: false,
        calculatorParserType: "N/A",
        calculatorSupportsUnits: "N/A",
        calculatorSupportsUnitConversions: "N/A",
        calculatorHasForwardBracketRecovery: "N/A",
        calculatorHasBackwardBracketRecovery: "N/A",
        calculatorHasNumberFormats: "N/A",
        calculatorOperatorList: [],
        calculatorIsExtendable: "N/A",
        calculatorSupportsCustomDecimalSeperator: "N/A",
        calculatorSupportsCustomThousandsSeperator: "N/A",
    },
    {
        applicationName: "Alfred",
        applicationStatus: "Active",
        applicationWebSites: [{type: "main", url: "https://alfredapp.com/"}],
        applicationCost: "Free/£29/£49",
        applicationSourceType: "Closed Source",
        applicationOperatingSystemsSupported: [{type: "mac", supported: true}],
        remarks: "",
        applicationLastReleaseVersion: {
            value: "4.5 Prerelease B1245",
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastReleaseDate: {
            value: new Date("15-Jul-21"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastCommitDate: {
            value: new Date("15-Jul-21"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationFramework: "Unknown",
        applicationRAMUsage: {
            value: "100MB",
            tooltip:
                "Alfred app is 18-20MB, but important to note Alfred requires Spotlight, which typically consumes around 80MB RAM. For a total of 100MB RAM",
        },
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: {
            value: 4,
            tooltip:
                "If you manage to alfred's guides-and-tutorials section, they have some great documentation, this documentation is hard to find for a beginner though.",
        }, //https://www.alfredapp.com/blog/tips-and-tricks/beginners-guide-to-alfred-searching-your-mac-and-the-web/
        uxFuzzySearch: {
            value: true,
            tooltip: "Some searches do not have fuzzy search, e.g. file search",
        },
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: "PREMIUM",
        pluginsManagerAvailable: "PREMIUM",
        pluginsFramework: {
            value: "AldredWorkflow",
            tooltip: "Workflows can theoretically run any language",
        },
        pluginsDocumentationRating: 3,

        contentPaneExists: {
            value: false,
            tooltip:
                "Some workflows may launch an additional application which implements a content pane, however Alfred itself does not have one.",
        },
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: false,
        itemsHaveMultipleActions: {
            value: "PREMIUM",
            tooltip:
                "Only file items have multiple actions, Normal items only have 1 action",
        },
        applyActionsAcrossMultipleItems: {
            value: "PREMIUM",
            tooltip:
                "Alfred has this ability, but it only works on files only (file buffer).",
        },
        searchableSubMenusAndContextMenus: false,
        pluginsCanCustomiseOtherPluginsItemActions: false,
        prioritisedSearchingOnUse: {
            value: true,
            tooltip: "Prioritised search appears to exist only for File items.",
        },
        hasTextInsertion: true, //word spreading
        hasInstantSend: {
            value: "PREMIUM",
            tooltip: "As part of universal actions",
        },
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: true,
        fileSearchIntegratesWithNativeFileSystem: true,
        fileSearchIsIndexed: true,
        fileSearchHasPatternSearch: {
            value: "PREMIUM",
            tooltip:
                "You can search for e.g. `*.bmp` but this isn't complete, e.g. `~/*.bmp` and `**/Downloads/*.bmp` don't work at all. You can use workflows to query with regex, but these are a premium feature.",
        },
        fileSearchHasContentPatternSearch: {
            value: "PREMIUM",
            tooltip: "Can use workflows, a premium feature, to perform this",
        },
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: "TBC",

        webSearch: true,
        webSearchIsCustomisable: true,
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: true,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "Alfred/1. Main.png",
        imageSearch: "Alfred/2. Search.png",
        imageSettings: "Alfred/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        //Alfred ships with it's own calculator which is rather bare-bones
        //This data was extracted from the better [advanced calculator](https://www.alfredforum.com/topic/5256-advanced-calculator-with-fast-off-line-unit-converter/?tab=comments#comment-32109)
        //plugin. [SourceCode](https://github.com/WoLpH/alfred-converter/)
        calculatorExists: true,
        calculatorParserType: "eval",
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: "PREMIUM", //
        calculatorHasForwardBracketRecovery: {
            value: "PREMIUM",
            tooltip: "Simple bracket recovery",
        },
        calculatorHasBackwardBracketRecovery: {
            value: "PREMIUM",
            tooltip: "Simple bracket recovery",
        },
        calculatorHasNumberFormats: "PREMIUM",
        calculatorOperatorList: "+,-,*,/,^".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: false,
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        applicationName: "LaunchBar",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "main", url: "https://obdev.at/products/launchbar/index.html"},
        ],
        applicationCost: "£29/£49",
        applicationSourceType: "Closed Source",
        applicationOperatingSystemsSupported: [{type: "mac", supported: true}],
        remarks: "",
        applicationLastReleaseVersion: {
            value: "6.14.1",
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastReleaseDate: {
            value: new Date("09-Mar-21"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastCommitDate: {
            value: new Date("09-Mar-21"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationFramework: "Unknown",
        applicationRAMUsage: "TBC",
        uxInstallersProvided: "PREMIUM",
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 2, //https://obdev.at/resources/launchbar/help/index.php?chapter=TipsAndTricks
        uxFuzzySearch: "PREMIUM",
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: "PREMIUM",
        pluginsManagerAvailable: "PREMIUM",
        pluginsFramework: {
            value: "Javascript Applescript Any",
            tooltip:
                "LaunchBar extensions in 'any' language - requests a JSON array of menu items to display.",
        },
        pluginsDocumentationRating: 2, //https://developer.obdev.at/launchbar-developer-documentation/#/implementing-actions-javascript

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: "PREMIUM",
        itemsHaveMultipleActions: "PREMIUM",
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: "PREMIUM",
        pluginsCanCustomiseOtherPluginsItemActions: "TBC",
        prioritisedSearchingOnUse: "PREMIUM",
        hasTextInsertion: false,
        hasInstantSend: "PREMIUM",
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: "PREMIUM",
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: "PREMIUM",
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: "PREMIUM",

        webSearch: "PREMIUM",
        webSearchIsCustomisable: "PREMIUM",
        webBookmarkSearch: "PREMIUM",

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false, //Settings stored in ~/Library/Application Support/LaunchBar but no in-built feature

        //THEMES
        themesCanChangeColors: "PREMIUM",
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "LaunchBar/1. Main.png",
        imageSearch: "LaunchBar/2. Search.png",
        imageSettings: "LaunchBar/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: "PREMIUM",
        calculatorParserType: "custom",
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: false,
        calculatorHasForwardBracketRecovery: false,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: false,
        calculatorOperatorList: "-,*,+,/,^".split(","),
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: {
            value: false,
            tooltip: "allows both , and . instead. Use | for param seperation",
        },
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        applicationName: "Spotlight",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "main", url: "https://en.wikipedia.org/wiki/Spotlight_(software)"},
        ],
        applicationCost: "N/A",
        applicationSourceType: "Closed Source",
        applicationOperatingSystemsSupported: [{type: "mac", supported: true}],
        remarks:
            "Big sur version removes the content pane, and preview becomes the default executable action.",
        applicationLastReleaseVersion: {
            value: "Big Sur 11.0",
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastReleaseDate: {
            value: new Date("22-Jun-20"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationLastCommitDate: {
            value: new Date("22-Jun-20"),
            tooltip: "When checking on 15-Jul-2021",
        },
        applicationFramework: "Unknown",
        applicationRAMUsage: "80MB",
        uxInstallersProvided: false,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 2,
        uxFuzzySearch: false,
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"], //Mac OS X languages probably?
        uxHasUndoRedo: false,

        pluginsAreSupported: false,
        pluginsManagerAvailable: "N/A",
        pluginsFramework: "N/A",
        pluginsDocumentationRating: "N/A",

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: false,
        itemsHaveMultipleActions: false,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: "N/A",
        pluginsCanCustomiseOtherPluginsItemActions: "N/A",
        prioritisedSearchingOnUse: true, //Spotlight has "top hit" category
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: true,
        fileSearchIntegratesWithNativeFileSystem: true,
        fileSearchIsIndexed: true,
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: false, //has a blacklist at least

        webSearch: true,
        webSearchIsCustomisable: false,
        webBookmarkSearch: false,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: false,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "Spotlight/1. Main.png",
        imageSearch: "Spotlight/2. Search.png",
        imageSettings: "Spotlight/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "custom",
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: true,
        calculatorHasForwardBracketRecovery: true,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: false,
        calculatorOperatorList: "+,-,*,/,x,^,!,%,mod".split(","), //Doesn't support
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: false,
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        applicationName: "FlashLight",
        applicationStatus: "Discontinued",
        applicationWebSites: [
            {type: "main", url: "https://www.macenhance.com/flashlight"},
            {type: "github", url: "https://github.com/w0lfschild/Flashlight"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [{type: "mac", supported: true}],
        remarks: "Requires deactivation of System Integrity Protection.",
        applicationLastReleaseVersion: () =>
            getGitLastReleaseVersion("w0lfschild/Flashlight"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("w0lfschild/Flashlight"),
        applicationLastCommitDate: () => getGitLastCommitOn("w0lfschild/Flashlight"),
        applicationFramework: "ObjectiveC",
        applicationRAMUsage: "80MB",
        uxInstallersProvided: true,
        uxIntroductionScreen: false,
        uxUserDocumentationRating: 2,
        uxFuzzySearch: false,
        uxSearchHighlights: false,
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: false,

        pluginsAreSupported: true,
        pluginsManagerAvailable: true,
        pluginsFramework: "JavaScript Python",
        pluginsDocumentationRating: 3,

        contentPaneExists: true,
        contentPaneFunctionalContent: false,
        recursiveItemFolders: false,
        itemsHaveMultipleActions: false,
        applyActionsAcrossMultipleItems: "N/A",
        searchableSubMenusAndContextMenus: "N/A",
        pluginsCanCustomiseOtherPluginsItemActions: "N/A",
        prioritisedSearchingOnUse: true, //Inherited from spotlight
        hasTextInsertion: false,
        hasInstantSend: false,
        hasInAppMnemonics: false,
        hasGlobalMnemonics: false,
        hasSearchesOnActiveWindowContext: false,

        fileSearchExists: true,
        fileSearchCanSearchFileContents: true,
        fileSearchIntegratesWithNativeFileSystem: true,
        fileSearchIsIndexed: true,
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: false,

        webSearch: true,
        webSearchIsCustomisable: true,
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "GUI-Based",
        settingsArePortable: false,

        //THEMES
        themesCanChangeColors: false,
        themesCanChangeLayout: false,

        //IMAGES
        imageMain: "FlashLight/1. Main.png",
        imageSearch: "FlashLight/2. Search.png",
        imageSettings: "FlashLight/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: true,
        calculatorParserType: "custom",
        calculatorSupportsUnits: false,
        calculatorSupportsUnitConversions: true,
        calculatorHasForwardBracketRecovery: true,
        calculatorHasBackwardBracketRecovery: false,
        calculatorHasNumberFormats: false,
        calculatorOperatorList: "+,-,*,/,x,^,!,%,mod".split(","), //Doesn't support
        calculatorIsExtendable: false,
        calculatorSupportsCustomDecimalSeperator: false,
        calculatorSupportsCustomThousandsSeperator: false,
    },
    {
        applicationName: "Ulauncher",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "main", url: "https://ulauncher.io/"},
            {type: "github", url: "https://github.com/Ulauncher/Ulauncher/"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [{type: "linux", supported: true}],
        remarks: "",
        applicationLastReleaseVersion: () =>
            getGitLastReleaseVersion("Ulauncher/Ulauncher"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("Ulauncher/Ulauncher"),
        applicationLastCommitDate: () => getGitLastCommitOn("Ulauncher/Ulauncher"),
        applicationFramework: "Python GTK Webkit",
        applicationRAMUsage: "TBC",
        uxInstallersProvided: true,
        uxIntroductionScreen: "TBC",
        uxUserDocumentationRating: "TBC",
        uxFuzzySearch: "TBC",
        uxSearchHighlights: "TBC",
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: "TBC",

        pluginsAreSupported: true,
        pluginsManagerAvailable: {
            value: false,
            tooltip:
                "No plugin manager, ULauncher runs all extensions from `~/.local/share/ulauncher/extensions/`",
        },
        pluginsFramework: "Python 3",
        pluginsDocumentationRating: "TBC",

        //TODO: Plugins cannot change the look/behavior of the application
        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",

        recursiveItemFolders: true,
        itemsHaveMultipleActions: true,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: true,
        pluginsCanCustomiseOtherPluginsItemActions: false,
        prioritisedSearchingOnUse: "TBC",
        hasTextInsertion: "TBC",
        hasInstantSend: "TBC",
        hasInAppMnemonics: "TBC",
        hasGlobalMnemonics: "TBC",
        hasSearchesOnActiveWindowContext: "TBC",

        fileSearchExists: true,
        fileSearchCanSearchFileContents: {
            value: true,
            tooltip: "deep file search plugin",
        },
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: false,
        fileSearchHasPatternSearch: false,
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: "TBC",

        webSearch: false,
        webSearchIsCustomisable: false,
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "TBC",
        settingsArePortable: "TBC",

        //THEMES
        themesCanChangeColors: "TBC",
        themesCanChangeLayout: "TBC",

        //IMAGES
        imageMain: "Ulauncher/1. Main.png",
        imageSearch: "Ulauncher/2. Search.png",
        imageSettings: "Ulauncher/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: "TBC",
        calculatorParserType: "TBC",
        calculatorSupportsUnits: "TBC",
        calculatorSupportsUnitConversions: "TBC",
        calculatorHasForwardBracketRecovery: "TBC",
        calculatorHasBackwardBracketRecovery: "TBC",
        calculatorHasNumberFormats: "TBC",
        calculatorOperatorList: [],
        calculatorIsExtendable: "TBC",
        calculatorSupportsCustomDecimalSeperator: "TBC",
        calculatorSupportsCustomThousandsSeperator: "TBC",
    },
    {
        applicationName: "Rofi",
        applicationStatus: "Active",
        applicationWebSites: [
            {type: "github", url: "https://github.com/davatorium/rofi"},
        ],
        applicationCost: "Free",
        applicationSourceType: "Open Source",
        applicationOperatingSystemsSupported: [{type: "linux", supported: true}],
        remarks: "",
        applicationLastReleaseVersion: () => getGitLastReleaseVersion("davatorium/rofi"),
        applicationLastReleaseDate: () => getGitLastReleaseDate("davatorium/rofi"),
        applicationLastCommitDate: () => getGitLastCommitOn("davatorium/rofi"),
        applicationFramework: "C",
        applicationRAMUsage: "TBC",
        uxInstallersProvided: true,
        uxIntroductionScreen: "TBC",
        uxUserDocumentationRating: "TBC",
        uxFuzzySearch: "TBC",
        uxSearchHighlights: "TBC",
        uxLanguagesSupported: ["en"],
        uxHasUndoRedo: "TBC",

        pluginsAreSupported: true,
        pluginsManagerAvailable: "TBC",
        pluginsFramework: "C",
        pluginsDocumentationRating: "TBC",

        contentPaneExists: false,
        contentPaneFunctionalContent: "N/A",
        recursiveItemFolders: false,
        itemsHaveMultipleActions: false,
        applyActionsAcrossMultipleItems: false,
        searchableSubMenusAndContextMenus: "N/A",
        pluginsCanCustomiseOtherPluginsItemActions: "TBC",
        prioritisedSearchingOnUse: "TBC",
        hasTextInsertion: "TBC",
        hasInstantSend: "TBC",
        hasInAppMnemonics: "TBC",
        hasGlobalMnemonics: "TBC",
        hasSearchesOnActiveWindowContext: "TBC",

        fileSearchExists: true, //https://github.com/csantosb/myscripts/blob/master/search-recoll-dmenu.sh
        fileSearchCanSearchFileContents: false,
        fileSearchIntegratesWithNativeFileSystem: false,
        fileSearchIsIndexed: false, //grep does not create an index
        fileSearchHasPatternSearch: {
            value: false,
            tooltip: "Uses grep so has pattern recognition",
        },
        fileSearchHasContentPatternSearch: false,
        fileSearchHasFileStructures: false,
        fileSearchHasConfigurableRoots: "TBC",

        webSearch: false,
        webSearchIsCustomisable: "N/A",
        webBookmarkSearch: true,

        //SETTINGS
        settingsStyle: "TBC",
        settingsArePortable: "TBC",

        //THEMES
        themesCanChangeColors: "TBC",
        themesCanChangeLayout: "TBC",

        //IMAGES
        imageMain: "Rofi/1. Main.png",
        imageSearch: "Rofi/2. Search.png",
        imageSettings: "Rofi/3. Settings.png",
        imageFileSearch: "",
        imageCalculator: "",
        imagesMisc: [],

        //CALCULATOR
        calculatorExists: "TBC",
        calculatorParserType: "TBC",
        calculatorSupportsUnits: "TBC",
        calculatorSupportsUnitConversions: "TBC",
        calculatorHasForwardBracketRecovery: "TBC",
        calculatorHasBackwardBracketRecovery: "TBC",
        calculatorHasNumberFormats: "TBC",
        calculatorOperatorList: [],
        calculatorIsExtendable: "TBC",
        calculatorSupportsCustomDecimalSeperator: "TBC",
        calculatorSupportsCustomThousandsSeperator: "TBC",
    },
    //TODO: AlbertLauncher  https://albertlauncher.github.io/
];
