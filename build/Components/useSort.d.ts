import { ICategoryData } from "./_types/ICategoryData";
export declare const useSort: <T extends Object>(data: T[], categories: ICategoryData<T>[]) => {
    sort: (categoryIndex: number, key: keyof T, ascending?: boolean) => void;
    sorted: T[];
    ascending: boolean;
    key: keyof T;
};
//# sourceMappingURL=useSort.d.ts.map