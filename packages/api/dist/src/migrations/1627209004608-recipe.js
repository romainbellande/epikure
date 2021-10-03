"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipe1627209004608 = void 0;
class recipe1627209004608 {
    constructor() {
        this.name = 'recipe1627209004608';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "recipe"`);
    }
}
exports.recipe1627209004608 = recipe1627209004608;
//# sourceMappingURL=1627209004608-recipe.js.map