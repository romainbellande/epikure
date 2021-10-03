"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUserSeed = void 0;
const client_1 = require("@prisma/client");
const faker_1 = require("faker");
const lodash_1 = require("lodash");
exports.defaultUserSeed = {
    email: 'john@example.com',
    pseudo: 'jdoe',
    password: 'johndoe',
    recipes: {
        create: (0, lodash_1.times)(100).map(() => ({
            name: faker_1.commerce.productName(),
            difficulty: faker_1.datatype.number(3),
            category: client_1.RecipeCategory.starter,
            active: faker_1.datatype.boolean(),
            photoUrl: faker_1.internet.url(),
            duration: faker_1.datatype.number(100),
        })),
    },
};
//# sourceMappingURL=default-user.seed.js.map