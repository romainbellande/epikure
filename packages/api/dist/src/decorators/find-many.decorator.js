"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMany = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const FindMany = () => (0, common_1.applyDecorators)((0, swagger_1.ApiQuery)({
    name: 'cursor',
    type: 'string',
    required: false,
    example: '01f4855a-c238-450f-90fc-df91e8f72196',
}), (0, swagger_1.ApiQuery)({ name: 'where', type: 'string', required: false }), (0, swagger_1.ApiQuery)({
    name: 'orderBy',
    type: 'string',
    required: false,
    example: '{ "createdAt": "desc" }',
}));
exports.FindMany = FindMany;
//# sourceMappingURL=find-many.decorator.js.map