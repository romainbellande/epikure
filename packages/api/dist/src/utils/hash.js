"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMatch = exports.hash = void 0;
const bcrypt = require("bcrypt");
const saltOrRounds = 10;
const hash = (value) => bcrypt.hash(value, saltOrRounds);
exports.hash = hash;
const isMatch = (value, hash) => bcrypt.compare(value, hash);
exports.isMatch = isMatch;
//# sourceMappingURL=hash.js.map