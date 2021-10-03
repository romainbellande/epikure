"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
}
exports.Config = Config;
Config.DATABASE_URL = process.env.DATABASE_URL;
Config.PORT = parseInt(process.env.PORT);
Config.CRYPTO_KEY = process.env.CRYPTO_KEY;
Config.CRYPTO_IV_BASE64 = process.env.CRYPTO_IV_BASE64;
Config.JWT_SECRET = process.env.JWT_SECRET;
//# sourceMappingURL=config.js.map