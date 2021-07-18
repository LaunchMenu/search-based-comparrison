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
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import {IValue} from "./data/_types/ItemTypes";

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
function getPlannedBooleanItemIcon(type: IValue<boolean | "PLANNED">) {
    // console.log(type);
    switch (type) {
        case true:
            return <CheckIcon key="true" />;
        case false:
            return <ClearIcon key="false" />;
        case "N/A":
            return <ClearIcon key={type} css={{color: "grey"}} />;
        case "TBC":
            return <ScheduleIcon key={type} />;
        case "PLANNED":
            return <EventIcon key={type} />;
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

function colorBoolean(type: IValue<boolean | "PLANNED">) {
    switch (type) {
        case true:
            return {backgroundColor: "#610161", color: "white"};
        case false:
            return {backgroundColor: "#BEB2CB", color: "black"};
        case "N/A":
            return {backgroundColor: "#BEB2CB", color: "#BEB2CB"};
        case "TBC":
            return {backgroundColor: "#BEB2CB", color: "red"};
        case "PLANNED":
            return {backgroundColor: "#BEB2CB", color: "grey"};
        case "PREMIUM":
            return {backgroundColor: "#610161", color: "white"};
        default:
            return {backgroundColor: "#F00"};
    }
}

const App: FC = () => {
    return (
        <div>
            <p>
                Do you think there is something wrong? Please,{" "}
                <a href="https://github.com/LaunchMenu/search-based-comparrison">
                    send a pull request to fix any issues!
                </a>
            </p>
            <DataTable<IApplicationInfo>
                data={data}
                getKey={item => item.applicationName}
                rows={{
                    applicationName: {
                        description: "Description",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    operatingSystems: {
                        description: "Operating systems",
                        sort: (a, b) => a.length < b.length,
                        Comp: ({data}) => (
                            <div>
                                {data.map((e, i) => (
                                    <span key={i}>{getOSIconType(e)}</span>
                                ))}
                            </div>
                        ),
                    },
                    sites: {
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
                    cost: {
                        description: "Pricing",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    sourceType: {
                        description: "Source code availability",
                        Comp: ({data}) => <div>{data}</div>,
                    },

                    applicationStatus: {
                        description: "Application status",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    lastReleaseVersion: {
                        description: "Last release version",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    lastReleaseDate: {
                        description: "Last release date",
                        Comp: ({data}) => (
                            <div>{data.toLocaleString().split(",")[0]}</div>
                        ),
                    },
                    lastCommit: {
                        description: "Last commit / update",
                        Comp: ({data}) => (
                            <div>{data.toLocaleString().split(",")[0]}</div>
                        ),
                    },
                    applicationFramework: {
                        description: "Application frameworks",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    executableReleasesProvided: {
                        description: "Application provides executable releases",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasPluginSupport: {
                        description: "Application has capability of extensions",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasPluginManager: {
                        description:
                            "Does the application have a manager to search/install/uninstall plugins",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    pluginFramework: {
                        description: "Extension framework",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    hasContentPane: {
                        description: "Is a content pane present?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    canHaveFunctionalContent: {
                        description: "Can content be functional?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
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
                    fileSearch: {
                        description: "Is a file search utility present?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    searchFileContents: {
                        description: "Can you search file contents?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    nativeFileSystemIntegration: {
                        description:
                            "Does the app integrate with the native OS's file explorer?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    isFileSystemIndexed: {
                        description: "Is the file system indexed?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasFileSystemPatternSearch: {
                        description: "Can use pattern to search for files",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasFileContentPatternSearch: {
                        description: "Can use pattern to search for file contents",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    hasFileStructures: {
                        description: "Has multi-file structures",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    webSearch: {
                        description: "Has WebSearch", //TODO: add tooltip: "Web search allows launching of websites given a query input"
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    webSearchIsCustomisable: {
                        description: "Is web search customisable?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    webBookmarkSearch: {
                        description: "Has a bookmarks plugin?",
                        css: colorBoolean,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>,
                    },
                    remarks: {
                        description: "Remarks",
                        Comp: ({data}) => <div>{data}</div>,
                    },
                }}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("App"));
