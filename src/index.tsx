import React, {FC, Fragment, ReactNode} from "react";
import ReactDOM from "react-dom";
import {jsx} from "@emotion/react";
import {data} from "./data/data";
import {DataTable} from "./Components/DataTable";
import {IApplicationInfo} from "./data/_types/IApplicationInfo";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import AppleIcon from "@material-ui/icons/Apple";
import {LinuxLogo} from "./data/icons/linux-logo";
import {WindowsLogo} from "./data/icons/windows-logo";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import BuildIcon from "@material-ui/icons/Build";
import EventIcon from "@material-ui/icons/Event";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import {IValue, Languages} from "./data/_types/ItemTypes";
import ImageIcon from "@material-ui/icons/Image";

/**
 *
 * @param param0
 * @returns
 */
function ShortTerm({tooltip}: {tooltip?: string}) {
    return (
        <div css={{position: "relative", display: "inline-block"}} title={tooltip}>
            <ClearIcon />
            <BuildIcon
                css={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "orange",
                }}
                style={{
                    fontSize: 15,
                }}
            />
        </div>
    );
}
function LongTerm({tooltip}: {tooltip?: string}) {
    return (
        <div css={{position: "relative", display: "inline-block"}} title={tooltip}>
            <ClearIcon />
            <EventIcon
                css={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "red",
                }}
                style={{
                    fontSize: 15,
                }}
            />
        </div>
    );
}

/**
 * get Website icon from type
 * @param type The type of icon to retrieve
 * @returns Node to use
 */
function getWebsiteIconType(type: string): ReactNode {
    switch (type) {
        case "github":
            return <GitHubIcon />;
        case "main":
            return <HomeIcon />;
        default:
            return <LinkIcon />;
    }
}

/**
 * Returns OS type icon from OS name and supported type
 * @param type - OS name
 * @param supported - Whether this is supported. Can include "PLANNED".
 * @returns
 */
function getOSIconType({
    type,
    supported,
}: {
    type: "mac" | "windows" | "linux";
    supported: boolean | "PLANNED";
}): ReactNode {
    let logo;
    switch (type) {
        case "windows":
            logo = <WindowsLogo key={type} />;
            break;
        case "mac":
            logo = <AppleIcon key={type} />;
            break;
        case "linux":
            logo = <LinuxLogo key={type} />;
            break;
        default:
            logo = <LinkIcon key={type} />;
            break;
    }
    return (
        <div css={{position: "relative", display: "inline-block"}} title="Planned">
            {logo}
            {supported == "PLANNED" && (
                <EventIcon
                    css={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        color: "red",
                        // transform: "scale(50%);translate(50%)",
                    }}
                    style={{
                        fontSize: 10,
                    }}
                />
            )}
        </div>
    );
}

/**
 * get Icon from Planned Boolean
 * @param type The boolean or keyword to convert into an icon
 * @returns Icon representing value
 */
function getPlannedBooleanItemIcon(
    type: IValue<boolean | "PlannedLongTerm" | "PlannedShortTerm">
) {
    // console.log(type);
    switch (type) {
        case true:
            return <CheckIcon key="true" />;
        case false:
            return <ClearIcon key="false" />;
        case "N/A":
            return <ClearIcon key={type} css={{color: "grey"}} />;
        case "TBC":
            return <HelpOutlineIcon key={type} css={{color: "grey"}} />;
        case "PlannedShortTerm":
            return <ShortTerm />;
        case "PlannedLongTerm":
            return <LongTerm />;
        case "PREMIUM":
            return (
                <div title="This is a payed for feature">
                    <AttachMoneyIcon key={type} />
                </div>
            );
        default:
            return <ScheduleIcon key={type} />;
    }
}

//Conditional theming for planned boolean type
function colorBoolean(type: IValue<boolean | "PlannedShortTerm" | "PlannedLongTerm">) {
    switch (type) {
        case true:
            return {backgroundColor: "#610161", color: "white"};
        case false:
            return {backgroundColor: "#BEB2CB", color: "black"};
        case "N/A":
            return {backgroundColor: "#BEB2CB", color: "#BEB2CB"};
        case "TBC":
            return {backgroundColor: "#BEB2CB", color: "red"};
        case "PlannedShortTerm":
        case "PlannedLongTerm":
            return {backgroundColor: "#BEB2CB", color: "grey"};
        case "PREMIUM":
            return {backgroundColor: "#610161", color: "white"};
        default:
            return {backgroundColor: "#F00"};
    }
}

const TooltipDiv = function ({content, tooltip}: {content: string; tooltip: string}) {
    return <div title={tooltip.replace(/^\s+/gm, "")}>{content}</div>;
};

//TODO: Legend
//TODO: Short term calendar things have different icon to long term calendar things
//TODO: Pictures on hover

const Table: FC = () => (
    <DataTable<IApplicationInfo>
        data={data}
        getKey={item => item.applicationName}
        categories={[
            {
                data: {
                    applicationName: {
                        description: "Description",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    applicationOperatingSystemsSupported: {
                        description: "Operating systems",
                        sort: (a, b) => a.join("-") < b.join("-"),
                        Comp: ({data}) => (
                            <div>
                                {data.map((e, i) => (
                                    <span key={i}>{getOSIconType(e)}</span>
                                ))}
                            </div>
                        ),
                    },
                    applicationWebSites: {
                        description: "Websites",
                        sort: (a, b) => a.length < b.length,
                        Comp: ({data}) => (
                            <div>
                                {data.map((e, i) => (
                                    <a
                                        key={e.url}
                                        href={e.url}
                                        css={{marginLeft: i == 0 ? 0 : 10}}>
                                        {getWebsiteIconType(e.type)}
                                    </a>
                                ))}
                            </div>
                        ),
                    },
                    applicationCost: {
                        description: "Pricing",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    applicationSourceType: {
                        description: "Source code availability",
                        Comp: ({data}) => <div>{data}</div>,
                    },

                    applicationStatus: {
                        description: "Application status",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    applicationLastReleaseVersion: {
                        description: "Last release version",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    applicationLastReleaseDate: {
                        description: "Last release date",
                        Comp: ({data}) => (
                            <div>{data.toLocaleString().split(",")[0]}</div>
                        ),
                    },
                    applicationLastCommitDate: {
                        description: "Last commit / update",
                        Comp: ({data}) => (
                            <div>{data.toLocaleString().split(",")[0]}</div>
                        ),
                    },
                    applicationFramework: {
                        description: "Application frameworks",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    applicationRAMUsage: {
                        description: "Typical RAM usage estimate from personal usage",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                },
            },
            {
                name: "User experience",
                data: {
                    uxInstallersProvided: {
                        description:
                            "Application provides prebuilt binaries/executables.",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    uxIntroductionScreen: {
                        description: "Application introduction screen providing help",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    uxUserDocumentationRating: {
                        description: (
                            <TooltipDiv
                                content="User documentation rating"
                                tooltip={`
                                    1. Documentation doesn't exist
                                    2. Documentation exists but is either difficult to find or covers very few features.
                                    3. Documentation exists, is easy to find, adequate feature coverage.
                                    4. Documentation exists, is easy to find, adequate feature coverage, with good use of key-display, diagrams, screenshots and videos
                                    5. Documentation exists, is easy to find, total feature coverage, with good use of key-display, diagrams, screenshots and videos`}
                            />
                        ),
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    uxFuzzySearch: {
                        description: "Application uses fuzzy search to find items",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    uxSearchHighlights: {
                        description: (
                            <TooltipDiv
                                content="Results highlighted by query input"
                                tooltip="Sometimes it can be difficult to know how a search matched the query you entered. Search highlights help this usability."
                            />
                        ),
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    uxHasUndoRedo: {
                        description: "Application has the ability to undo/redo actions",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    uxLanguagesSupported: {
                        description: "Languages supported",
                        sort: (a, b) => a.length < b.length,
                        Comp: ({data}) => (
                            <div>{data.map(e => Languages[e].symbol).join(" ")}</div>
                        ),
                    },
                },
            },
            {
                name: "Plugins",
                data: {
                    pluginsAreSupported: {
                        description: "Application has capability of extensions",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    pluginsManagerAvailable: {
                        description:
                            "Does the application have a manager to search/install/uninstall plugins",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    pluginsFramework: {
                        description: "Extension framework",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    pluginsDocumentationRating: {
                        description: (
                            <TooltipDiv
                                content="Plugin/Developer Documentation Rating"
                                tooltip={`
                                    1. Documentation doesn't exist
                                    2. Documentation exists but is either difficult to find or covers very few features.
                                    3. Documentation exists, is easy to find, adequate feature coverage.
                                    4. Documentation exists, is easy to find, adequate feature coverage, with good use of key-display, diagrams, screenshots and videos
                                    5. Documentation exists, is easy to find, total feature coverage, with good use of key-display, diagrams, screenshots and videos
                                `}
                            />
                        ),
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                },
            },
            {
                name: "Content",
                data: {
                    contentPaneExists: {
                        description: "Is a content pane present?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    contentPaneFunctionalContent: {
                        description: "Can content be functional?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                },
            },
            {
                name: "Core features",
                data: {
                    recursiveItemFolders: {
                        description: "Can have recursive item folders",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    itemsHaveMultipleActions: {
                        description: "Items can have multiple actions",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    applyActionsAcrossMultipleItems: {
                        description: "Can apply actions across multiple items",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    searchableSubMenusAndContextMenus: {
                        description: "Searchable submenus and context menus",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    pluginsCanCustomiseOtherPluginsItemActions: {
                        description:
                            "Can plugins add additional actions to menu items which aren't from the same plugin?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    prioritisedSearchingOnUse: {
                        description:
                            "Are menu item's position in the list prioritised based on how often they are used?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasTextInsertion: {
                        description: (
                            <TooltipDiv
                                content="Does the application have text insertion / word spreading?"
                                tooltip="Does the application have the ability to insert text into another application, e.g. Alfred snippets."
                            />
                        ),
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasInstantSend: {
                        description: (
                            <TooltipDiv
                                content="Does the application have instant send"
                                tooltip="This feature takes the currently selected item/text in another application and performs a search / action search based on the selected item."
                            />
                        ),
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasInAppMnemonics: {
                        description: (
                            <TooltipDiv
                                content="Does the application have in-app mnemonics?"
                                tooltip="Mnemonics overlay key combinations over UI elements in order to activate them with the keyboard."
                            />
                        ),
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasGlobalMnemonics: {
                        description: (
                            <TooltipDiv
                                content="Does the application have global mnemonics?"
                                tooltip="Global mnemonics overlay key combinations over other application's UI elements in order to activate them with the keyboard."
                            />
                        ),
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasSearchesOnActiveWindowContext: {
                        description:
                            "Application obtains information about the previous focussed window to provide more context to search queries",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                },
            },
            {
                name: "File search",
                data: {
                    fileSearchExists: {
                        description: "Is a file search utility present?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    fileSearchCanSearchFileContents: {
                        description: "Can you search file contents?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    fileSearchIntegratesWithNativeFileSystem: {
                        description:
                            "Does the app integrate with the native OS's file explorer?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    fileSearchIsIndexed: {
                        description: "Is the file system indexed?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    fileSearchHasPatternSearch: {
                        description: "Can use pattern to search for files",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    fileSearchHasContentPatternSearch: {
                        description: "Can use pattern to search for file contents",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    fileSearchHasFileStructures: {
                        description: "Has multi-file structures",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    fileSearchHasConfigurableRoots: {
                        description: "File search has configurable roots",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                },
            },
            {
                name: "Web search",
                data: {
                    webSearch: {
                        description: (
                            <TooltipDiv
                                content="Has WebSearch"
                                tooltip="Web search allows launching of websites given a query input"
                            />
                        ),
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    webSearchIsCustomisable: {
                        description: (
                            <TooltipDiv
                                content="Is web search customisable?"
                                tooltip="Customisable web search will allow users to query arbitrary websites"
                            />
                        ),
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    webBookmarkSearch: {
                        description: "Has a bookmarks plugin?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                },
            },
            {
                name: "Settings",
                data: {
                    settingsStyle: {
                        description: (
                            <TooltipDiv
                                content="How do you change settings?"
                                tooltip={`
                                N/A - No application configuration
                                TBC - To be confirmed
                                Text-Based - Changing settings involves changing text in a config file
                                Menu-Based - Changing settings involves reusing the same system the search system already uses.
                                GUI-based - Changing settings launches a seperate GUI users can use to modify settings.
                            `}
                            />
                        ),
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    settingsArePortable: {
                        description: "Can settings be imported/exported?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                },
            },
            {
                name: "Themes",
                data: {
                    themesCanChangeColors: {
                        description: "You can change colors of the application",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    themesCanChangeLayout: {
                        description: "You can customise the layout of the application?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                },
            },
            {
                name: "Closing remarks",
                data: {
                    remarks: {
                        description: "Remarks",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                },
            },
        ]}
    />
);

const App: FC = () => {
    return (
        <div>
            <p>
                Do you think there is something wrong? Please,{" "}
                <a href="https://github.com/LaunchMenu/search-based-comparrison">
                    send a pull request to fix any issues!
                </a>
            </p>
            <Table />
            {[...Array(50).keys()].map(e => (
                <br />
            ))}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("App"));
