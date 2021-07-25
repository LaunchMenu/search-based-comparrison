//TODO: We cannot change the user-agent as requested in chrome, as chrome will automatically replace it...
//maybe we can redirect the calls through cors?
// const fetchOptions = {
//     method: "GET",
//     headers: new Headers({
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "User-Agent": "launchmenu/search-based-comparrison",
//     }),
// };

export type IReleaseInfo = {
    tag_name: string;
    name: string;
    created_at: string;
    published_at: string;
};
export type ICommitInfo = {
    commit: {
        committer: {
            date: string;
        };
    };
};
const queryGitCache: {[key: string]: IReleaseInfo} = {};
const queryGitCommitCache: {[key: string]: ICommitInfo[]} = {};
export async function gitLatestRelease(repo: string): Promise<IReleaseInfo> {
    let q = `https://api.github.com/repos/${repo}/releases/latest`;
    if (!queryGitCache[q]) {
        let resp = await (await fetch(q)).json();
        if (resp.documentation_url) {
            console.error(resp, "Using dummy data");
            resp = {
                tag_name: "",
                name: "Unknown",
                created_at: "01-01-1900",
                published_at: "01-01-1900",
            };
        }
        queryGitCache[q] = resp;
    }
    if (queryGitCache[q]) {
        return queryGitCache[q];
    } else {
        throw "An unknown error occurred";
    }
}
export async function gitCommits(repo: string): Promise<ICommitInfo[]> {
    let q = `https://api.github.com/repos/${repo}/commits`;
    if (!queryGitCommitCache[q]) {
        let resp = await (await fetch(q)).json();
        if (resp.documentation_url) {
            console.error(resp, "Using dummy data");
            resp = [
                {
                    commit: {
                        committer: {
                            date: "01-01-1900",
                        },
                    },
                },
            ];
        }
        queryGitCommitCache[q] = resp;
    }
    if (queryGitCommitCache[q]) {
        return queryGitCommitCache[q];
    } else {
        throw "An unknown error occurred";
    }
}

const devmode: boolean = true;
export async function getGitLastReleaseVersion(repo: string): Promise<string> {
    if (devmode) return "A version";
    let e = await gitLatestRelease(repo);
    return `${e.tag_name} ${e.name}`;
}
export async function getGitLastReleaseDate(repo: string): Promise<Date> {
    if (devmode) return new Date("01-01-1900");
    let e = await gitLatestRelease(repo);
    return new Date(e.published_at);
}
export async function getGitLastCommitOn(repo: string): Promise<Date> {
    if (devmode) return new Date("01-01-1900");
    let e = await gitCommits(repo);
    return new Date(e[0].commit.committer.date);
}
