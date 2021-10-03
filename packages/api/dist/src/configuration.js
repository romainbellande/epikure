"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = () => ({
    databaseUrl: process.env.DATABASE_URL,
    port: Number(process.env.PORT),
    crypto: {
        key: process.env.CRYPTO_KEY,
        ivBase64: process.env.CRYPTO_IV_BASE64,
    },
    accessToken: {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: '1h',
    },
    refreshToken: {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: '60d',
    },
});
exports.configuration = configuration;
//# sourceMappingURL=configuration.js.map