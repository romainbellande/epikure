"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMany = void 0;
const common_1 = require("@nestjs/common");
const findMany = (service) => function ({ cursor, where, orderBy, }) {
    const cursorQuery = cursor
        ? { id: cursor }
        : undefined;
    const skip = cursor ? 1 : 0;
    let whereQuery;
    let orderByQuery;
    try {
        whereQuery = where ? JSON.parse(where) : undefined;
    }
    catch (e) {
        throw new common_1.BadRequestException('query parameter "where" is invalid');
    }
    try {
        orderByQuery = orderBy ? JSON.parse(orderBy) : undefined;
    }
    catch (e) {
        throw new common_1.BadRequestException('query parameter "orderBy" is invalid');
    }
    return service.findMany({
        where: whereQuery,
        cursor: cursorQuery,
        skip,
        orderBy: orderByQuery,
        take: 30,
    });
};
exports.findMany = findMany;
//# sourceMappingURL=find-many.js.map