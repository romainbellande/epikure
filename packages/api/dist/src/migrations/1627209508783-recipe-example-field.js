"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeExampleField1627209508783 = void 0;
class recipeExampleField1627209508783 {
    constructor() {
        this.name = 'recipeExampleField1627209508783';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "recipe" ADD "exampleField" integer NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "exampleField"`);
    }
}
exports.recipeExampleField1627209508783 = recipeExampleField1627209508783;
//# sourceMappingURL=1627209508783-recipe-example-field.js.map