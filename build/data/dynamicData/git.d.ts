export declare type IReleaseInfo = {
    tag_name: string;
    name: string;
    created_at: string;
    published_at: string;
};
export declare type ICommitInfo = {
    commit: {
        committer: {
            date: string;
        };
    };
};
export declare function gitLatestRelease(repo: string): Promise<IReleaseInfo>;
export declare function gitCommits(repo: string): Promise<ICommitInfo[]>;
export declare function getGitLastReleaseVersion(repo: string): Promise<string>;
export declare function getGitLastReleaseDate(repo: string): Promise<Date>;
export declare function getGitLastCommitOn(repo: string): Promise<Date>;
//# sourceMappingURL=git.d.ts.map