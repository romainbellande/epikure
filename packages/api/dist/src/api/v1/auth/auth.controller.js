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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../user/user.dto");
const access_token_response_1 = require("./access-token-response");
const auth_service_1 = require("./auth.service");
const local_auth_guard_1 = require("./local-auth.guard");
const credentials_1 = require("./models/credentials");
const user_service_1 = require("../user/user.service");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async signin(req) {
        const refreshTokenCookie = this.authService.getRefreshTokenCookie(req.user);
        const accessTokenCookie = this.authService.getAccessTokenCookie(req.user);
        await this.userService.setCurrentRefreshToken(req.user.id, refreshTokenCookie);
        req.res.setHeader('Set-Cookie', [refreshTokenCookie, accessTokenCookie]);
        req.res.status(200);
        return this.authService.signin(req.user);
    }
    async signup(userDto) {
        return this.authService.signup(userDto);
    }
    async refresh(req) {
        const accessTokenCookie = this.authService.getAccessTokenCookie(req.user);
        req.res.setHeader('Set-Cookie', accessTokenCookie);
        return req.user;
    }
};
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/signin'),
    (0, swagger_1.ApiBody)({ type: credentials_1.Credentials }),
    (0, swagger_1.ApiResponse)({ type: access_token_response_1.AccessTokenResponse }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: access_token_response_1.AccessTokenResponse }),
    (0, common_1.Get)('/refresh'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map