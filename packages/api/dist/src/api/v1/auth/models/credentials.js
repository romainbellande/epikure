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
exports.Credentials = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const auth_1 = require("../../../../shared/auth");
const default_user_seed_1 = require("../../../../seeds/default-user.seed");
const { email, password } = default_user_seed_1.defaultUserSeed;
class Credentials {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: email }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Credentials.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: password }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Credentials.prototype, "password", void 0);
exports.Credentials = Credentials;
//# sourceMappingURL=credentials.js.map