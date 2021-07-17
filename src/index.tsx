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
function getOSIconType(type: string): ReactNode {
    switch (type) {
        case "windows":
            return <WindowsLogo key={type} />;
        case "mac":
            return <AppleIcon key={type} />;
        case "linux":
            return <LinuxLogo key={type} />;
        default:
            return <LinkIcon key={type} />;
    }
}
function getPlannedBooleanItemIcon(type: IValue<boolean | "PLANNED">) {
    console.log(type);
    switch (type) {
        case true:
            return <CheckIcon key="true" />;
        case false:
            return <ClearIcon key="false" />;
        case "N/A":
            return <ClearIcon key={type} />;
        case "TBC":
            return <ScheduleIcon key={type} />;
        case "PLANNED":
            return <EventIcon key={type} />;
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
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    operatingSystems: {
                        description: "Operating systems",
                        sort: (a, b) => a.length < b.length,
                        Comp: ({data}) => (
                            <div>{data.map(e => getOSIconType(e.type))}</div>
                        ),
                    },
                    sites: {
                        description: "Websites",
                        sort: (a, b) => a.length < b.length,
                        Comp: ({data}) => (
                            <div>
                                {data.map(e => (
                                    <a key={e.url} href={e.url} css={{marginRight: 10}}>
                                        {getWebsiteIconType(e.type)}
                                    </a>
                                ))}
                            </div>
                        ),
                    },
                    cost: {
                        description: "Pricing",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    sourceType: {
                        description: "Source code availability",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },

                    applicationStatus: {
                        description: "Application status",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    lastReleaseVersion: {
                        description: "Last release version",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    lastReleaseDate: {
                        description: "Last release date",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => (
                            <div>{data.toLocaleString().split(",")[0]}</div>
                        ),
                    },
                    lastCommit: {
                        description: "Last commit / update",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => (
                            <div>{data.toLocaleString().split(",")[0]}</div>
                        ),
                    },
                    applicationFramework: {
                        description: "Application frameworks",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    executableReleasesProvided: {
                        description: "Application provides executable releases",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    hasExtensions: {
                        description: "Application has capability of extensions",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    pluginFramework: {
                        description: "Extension framework",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{data}</div>,
                    },
                    hasContentPane: {
                        description: "Is a content pane present?",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    canHaveFunctionalContent: {
                        description: "Can content be functional?",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    recursiveItemFolders: {
                        description: "Can have recursive item folders",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    itemsHaveMultipleActions: {
                        description: "Items can have multiple actions",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    applyActionsAcrossMultipleItems: {
                        description: "Can apply actions across multiple items",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    searchableSubMenusAndContextMenus: {
                        description: "Searchable submenus and context menus",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    fileSearch: {
                        description: "Is a file search utility present?",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    searchFileContents: {
                        description: "Can you search file contents?",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    nativeFileSystemIntegration: {
                        description:
                            "Does the app integrate with the native OS's file explorer?",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                    isFileSystemIndexed: {
                        description: "Is the file system indexed?",
                        sort: (a, b) => a < b,
                        Comp: ({data}) => <div>{getPlannedBooleanItemIcon(data)}</div>, //TODO: Can't use strings here? Although would prefer ticks / crosses / calendars
                    },
                }}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("App"));
