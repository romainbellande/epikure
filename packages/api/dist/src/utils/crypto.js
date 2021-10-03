"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = require("crypto");
const util_1 = require("util");
const config_1 = require("../config");
const iv = Buffer.from(config_1.Config.CRYPTO_IV_BASE64, 'base64');
const getKeyAsync = () => (0, util_1.promisify)(crypto_1.scrypt)(config_1.Config.CRYPTO_KEY, 'salt', 32);
const encrypt = async (textToEncrypt) => {
    const key = await getKeyAsync();
    const cipher = (0, crypto_1.createCipheriv)('aes-256-ctr', key, iv);
    const encryptedText = Buffer.concat([
        cipher.update(textToEncrypt),
        cipher.final(),
    ]);
    return encryptedText.toString('base64');
};
exports.encrypt = encrypt;
const decrypt = async (encryptedText) => {
    const key = await getKeyAsync();
    const decipher = (0, crypto_1.createDecipheriv)('aes-256-ctr', key, iv);
    const decryptedText = Buffer.concat([
        decipher.update(Buffer.from(encryptedText, 'base64')),
        decipher.final(),
    ]).toString();
    return decryptedText;
};
exports.decrypt = decrypt;
//# sourceMappingURL=crypto.js.map