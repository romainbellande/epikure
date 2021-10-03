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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const crypto_1 = require("../../../utils/crypto");
const hash_1 = require("../../../utils/hash");
const user_dto_1 = require("../user/user.dto");
const user_service_1 = require("../user/user.service");
const config_1 = require("@nestjs/config");
const configuration_1 = require("../../../configuration");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUser(email, pass) {
        const encryptedEmail = await (0, crypto_1.encrypt)(email);
        const user = await this.userService.findUnique({ email: encryptedEmail });
        console.debug('user', user);
        if (user && (0, hash_1.isMatch)(pass, user.password)) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    getRefreshTokenCookie(user) {
        const payload = { email: user.email, sub: user.id };
        const refreshTokenConfig = this.configService.get('refreshToken');
        const refreshToken = this.jwtService.sign(payload, refreshTokenConfig);
        return this.createCookie({
            key: 'Refresh',
            token: refreshToken,
            expiresIn: refreshTokenConfig.expiresIn,
        });
    }
    getAccessTokenCookie(user) {
        const payload = { email: user.email, sub: user.id };
        const accessTokenConfig = this.configService.get('accessToken');
        const accessToken = this.jwtService.sign(payload, accessTokenConfig);
        return this.createCookie({
            key: 'Authorization',
            token: accessToken,
            expiresIn: accessTokenConfig.expiresIn,
        });
    }
    async signin(user) {
        const payload = { email: user.email, sub: user.id };
        const refreshTokenConfig = this.configService.get('refreshToken');
        const refreshToken = this.jwtService.sign(payload, refreshTokenConfig);
        const accessTokenConfig = this.configService.get('accessToken');
        const accessToken = this.jwtService.sign(payload, accessTokenConfig);
        return {
            refreshToken,
            accessToken,
        };
    }
    async signup({ email, pseudo, password }) {
        return this.userService.createOne({
            email,
            pseudo,
            password,
        });
    }
    createCookie({ token, expiresIn, key }) {
        return `${key}=${token}; HttpOnly; Path=/; Secure; Domain=epikure.localhost; Max-Age=${expiresIn}`;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map