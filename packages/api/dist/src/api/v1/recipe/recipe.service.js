"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../services/prisma/prisma.service");
const find_many_params_1 = require("./interfaces/find-many.params");
let RecipeService = class RecipeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOne(data) {
        return this.prisma.recipe.create({
            data,
        });
    }
    async findMany(params = {}) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.recipe.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
};
RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map