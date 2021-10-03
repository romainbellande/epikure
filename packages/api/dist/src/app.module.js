"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const routes_1 = require("./routes");
const user_module_1 = require("./api/v1/user/user.module");
const auth_module_1 = require("./api/v1/auth/auth.module");
const configuration_1 = require("./configuration");
const recipe_module_1 = require("./api/v1/recipe/recipe.module");
const prisma_module_1 = require("./services/prisma/prisma.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.configuration],
                ignoreEnvFile: true,
                isGlobal: true,
            }),
            core_1.RouterModule.register(routes_1.routes),
            prisma_module_1.PrismaModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            recipe_module_1.RecipeModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map