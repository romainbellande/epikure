"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaMiddleware = void 0;
const crypto_1 = require("../../utils/crypto");
const prismaMiddleware = async (params, next) => {
    var _a, _b;
    if (params.model === 'User') {
        if (params.action === 'create' ||
            (params.action === 'update' && ((_b = (_a = params.args) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.email))) {
            const { email } = params.args.data;
            params.args.data.email = await (0, crypto_1.encrypt)(email);
        }
    }
    return next(params);
};
exports.prismaMiddleware = prismaMiddleware;
//# sourceMappingURL=prisma.middleware.js.map