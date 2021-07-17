import {FC, ReactNode} from "react";

export type IRowData<T> = {
    description: ReactNode;
    sort: (a: T, b: T) => boolean;
    Comp: FC<{data: T; index: number}>;
};
