"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken1623048320001 = void 0;
class refreshToken1623048320001 {
    constructor() {
        this.name = 'refreshToken1623048320001';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "refreshTokenHash" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "refreshTokenHash"`);
    }
}
exports.refreshToken1623048320001 = refreshToken1623048320001;
//# sourceMappingURL=1623048320001-refresh-token.js.map