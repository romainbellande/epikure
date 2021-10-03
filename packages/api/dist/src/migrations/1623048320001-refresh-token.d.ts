import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class refreshToken1623048320001 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
