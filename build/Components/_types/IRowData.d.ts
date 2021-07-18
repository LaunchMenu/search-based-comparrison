import { CSSObject } from "@emotion/react";
import { FC, ReactNode } from "react";
export declare type IRowData<T> = {
    description: ReactNode;
    sort?: (a: T, b: T) => boolean;
    Comp: FC<{
        data: T;
        index: number;
    }>;
    css?: (data: T) => CSSObject;
};
//# sourceMappingURL=IRowData.d.ts.map