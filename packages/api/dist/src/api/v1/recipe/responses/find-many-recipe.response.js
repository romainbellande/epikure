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
exports.FindManyRecipeResponse = void 0;
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
class FindManyRecipeResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindManyRecipeResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindManyRecipeResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FindManyRecipeResponse.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], FindManyRecipeResponse.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: client_1.RecipeCategory.starter }),
    __metadata("design:type", String)
], FindManyRecipeResponse.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], FindManyRecipeResponse.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'http://api.epikure.con/files/my-picture.png' }),
    __metadata("design:type", String)
], FindManyRecipeResponse.prototype, "photoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'duration in minutes' }),
    __metadata("design:type", Number)
], FindManyRecipeResponse.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FindManyRecipeResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], FindManyRecipeResponse.prototype, "updatedAt", void 0);
exports.FindManyRecipeResponse = FindManyRecipeResponse;
//# sourceMappingURL=find-many-recipe.response.js.map