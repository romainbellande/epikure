interface FindManyParamsBase {
    skip?: number | undefined;
    take?: number | undefined;
    cursor?: unknown | undefined;
    where?: unknown | undefined;
    orderBy?: unknown | undefined;
}
interface CrudService<FindManyParams extends FindManyParamsBase, FindManyResponse> {
    findMany(params: FindManyParams): Promise<FindManyResponse[]>;
}
interface FindManyQuery {
    cursor: string;
    where: string;
    orderBy: string;
}
export declare const findMany: <FindManyParams extends FindManyParamsBase, FindManyResponse>(service: CrudService<FindManyParams, FindManyResponse>) => ({ cursor, where, orderBy, }: FindManyQuery) => Promise<FindManyResponse[]>;
export {};
