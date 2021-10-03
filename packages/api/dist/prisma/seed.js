"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const client_1 = require("@prisma/client");
const default_user_seed_1 = require("../src/seeds/default-user.seed");
const prisma_middleware_1 = require("../src/services/prisma/prisma.middleware");
const prisma = new client_1.PrismaClient();
prisma.$use(prisma_middleware_1.prismaMiddleware);
const removeAllRecords = async () => {
    const prisma = new client_1.PrismaClient();
    const modelNames = client_1.Prisma.dmmf.datamodel.models.map((model) => model.name);
    return Promise.all(modelNames.map((modelName) => prisma[modelName.toLowerCase()].deleteMany()));
};
const main = async () => {
    await removeAllRecords();
    console.info('all records removed');
    console.info('seeding');
    const defaultUser = await prisma.user.create({
        data: default_user_seed_1.defaultUserSeed,
    });
    console.debug(`user ${defaultUser.pseudo} created`);
};
exports.main = main;
(0, exports.main)()
    .catch(console.error)
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map