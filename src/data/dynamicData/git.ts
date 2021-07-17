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
        queryGitCache[q] = resp;
    }
    if (queryGitCache[q]) {
        return queryGitCache[q];
    } else {
        throw "An error occurred";
    }
}
export async function gitCommits(repo: string): Promise<ICommitInfo[]> {
    let q = `https://api.github.com/repos/${repo}/commits`;
    if (!queryGitCommitCache[q]) {
        let resp = await (await fetch(q)).json();
        queryGitCommitCache[q] = resp;
    }
    if (queryGitCache[q]) {
        return queryGitCommitCache[q];
    } else {
        throw "An error occurred";
    }
}
export async function getGitLastReleaseVersion(repo: string): Promise<string> {
    //return "A version";
    let e = await gitLatestRelease(repo);
    return `${e.tag_name} ${e.name}`;
}
export async function getGitLastReleaseDate(repo: string): Promise<Date> {
    //return new Date("01-01-1900");
    let e = await gitLatestRelease(repo);
    return new Date(e.published_at);
}
export async function getGitLastCommitOn(repo: string): Promise<Date> {
    //return new Date("01-01-1900");
    let e = await gitCommits(repo);
    return new Date(e[0].commit.committer.date);
}
