"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_module_1 = require("./api/v1/auth/auth.module");
const user_module_1 = require("./api/v1/user/user.module");
const recipe_module_1 = require("./api/v1/recipe/recipe.module");
exports.routes = [
    {
        path: '/api',
        children: [
            {
                path: '/v1',
                children: [
                    {
                        path: '/auth',
                        module: auth_module_1.AuthModule,
                    },
                    {
                        path: '/users',
                        module: user_module_1.UserModule,
                    },
                    {
                        path: '/recipes',
                        module: recipe_module_1.RecipeModule,
                    },
                ],
            },
        ],
    },
];
//# sourceMappingURL=routes.js.map