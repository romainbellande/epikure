/// <reference types="jest" />
export declare class MockRepository<T> {
    createQueryBuilder: jest.Mock<{
        offset: jest.Mock<any, any>;
        take: jest.Mock<any, any>;
        orderBy: jest.Mock<any, any>;
        skip: jest.Mock<any, any>;
        limit: jest.Mock<any, any>;
        from: jest.Mock<any, any>;
        addFrom: jest.Mock<any, any>;
        where: jest.Mock<any, any>;
        andWhere: jest.Mock<any, any>;
        innerJoinAndSelect: jest.Mock<any, any>;
        leftJoinAndSelect: jest.Mock<any, any>;
        getManyAndCount: jest.Mock<any, any>;
        getMany: jest.Mock<any, any>;
        getOne: jest.Mock<any, any>;
        delete: jest.Mock<any, any>;
        execute: jest.Mock<any, any>;
    }, []>;
    manager: {
        transaction: (a: any) => Promise<any>;
    };
    metadata: {
        connection: {
            options: {
                type: any;
            };
        };
        columns: any[];
        relations: any[];
    };
    save: jest.Mock<any, any>;
    delete: jest.Mock<any, any>;
    update: jest.Mock<any, any>;
    findOne: jest.Mock<any, any>;
    findOneOrFail: jest.Mock<any, any>;
    find: jest.Mock<any, any>;
    getMany: jest.Mock<any, any>;
    queryBuilder: {
        offset: jest.Mock<any, any>;
        take: jest.Mock<any, any>;
        orderBy: jest.Mock<any, any>;
        skip: jest.Mock<any, any>;
        limit: jest.Mock<any, any>;
        from: jest.Mock<any, any>;
        addFrom: jest.Mock<any, any>;
        where: jest.Mock<any, any>;
        andWhere: jest.Mock<any, any>;
        innerJoinAndSelect: jest.Mock<any, any>;
        leftJoinAndSelect: jest.Mock<any, any>;
        getManyAndCount: jest.Mock<any, any>;
        getMany: jest.Mock<any, any>;
        getOne: jest.Mock<any, any>;
        delete: jest.Mock<any, any>;
        execute: jest.Mock<any, any>;
    };
}
