"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockRepository = void 0;
class MockRepository {
    constructor() {
        this.createQueryBuilder = jest.fn(() => this.queryBuilder);
        this.manager = { transaction: (a) => Promise.resolve(a()) };
        this.metadata = {
            connection: { options: { type: null } },
            columns: [],
            relations: [],
        };
        this.save = jest.fn();
        this.delete = jest.fn();
        this.update = jest.fn();
        this.findOne = jest.fn();
        this.findOneOrFail = jest.fn();
        this.find = jest.fn();
        this.getMany = jest.fn();
        this.queryBuilder = {
            offset: jest.fn().mockReturnThis(),
            take: jest.fn().mockReturnThis(),
            orderBy: jest.fn().mockReturnThis(),
            skip: jest.fn().mockReturnThis(),
            limit: jest.fn().mockReturnThis(),
            from: jest.fn().mockReturnThis(),
            addFrom: jest.fn().mockReturnThis(),
            where: jest.fn().mockReturnThis(),
            andWhere: jest.fn().mockReturnThis(),
            innerJoinAndSelect: jest.fn().mockReturnThis(),
            leftJoinAndSelect: jest.fn().mockReturnThis(),
            getManyAndCount: jest.fn(),
            getMany: jest.fn(),
            getOne: jest.fn(),
            delete: jest.fn().mockReturnThis(),
            execute: jest.fn().mockReturnThis(),
        };
    }
}
exports.MockRepository = MockRepository;
//# sourceMappingURL=mock-repository.js.map