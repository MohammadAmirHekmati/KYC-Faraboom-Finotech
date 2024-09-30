import { MigrationInterface, QueryRunner } from "typeorm";

export class updatePostTable1684572708797 implements MigrationInterface {
    name = 'updatePostTable1684572708797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inquery_national_birth" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "national_code" character varying NOT NULL, "birth_date" character varying NOT NULL, "match" boolean NOT NULL, CONSTRAINT "PK_bdb55e7c9cd899f7a060f987be5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "acount_to_sheba" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deposit" character varying NOT NULL, "accountStatus" character varying NOT NULL, "iban" character varying NOT NULL, "depositOwners" character varying NOT NULL, "bankName" character varying NOT NULL, "bankCode" character varying NOT NULL, "trackId" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_f70320ad179bac8e06f18d9ec1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inquery_national_phone" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "national_code" character varying NOT NULL, "phone_number" character varying NOT NULL, "match" boolean NOT NULL, CONSTRAINT "PK_3eeaeb8faeea60e0ed869a8bd44" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "card-to-sheba" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deposit" character varying NOT NULL, "depositStatus" character varying NOT NULL, "bankName" character varying NOT NULL, "depositOwners" character varying NOT NULL, "card" character varying NOT NULL, "trackId" character varying NOT NULL, "iban" character varying NOT NULL, CONSTRAINT "PK_9c54e105a4b8a691663cffed130" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "card-detail" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "trackId" character varying NOT NULL, "card" character varying NOT NULL, "name" character varying NOT NULL, "result" character varying NOT NULL, "description" character varying NOT NULL, "doTime" character varying NOT NULL, "bankName" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_c3cbf87cd8e9b18f2e419b3310d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "facility-national-code" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "birthDate" character varying NOT NULL, "fullName" character varying, "firstName" character varying, "lastName" character varying, "gender" character varying, "fatherName" character varying, "national_code" character varying NOT NULL, "deathStatus" character varying NOT NULL, "fullNameSimilarity" double precision, "firstNameSimilarity" double precision, "lastNameSimilarity" double precision, CONSTRAINT "PK_459c91f0037b26468e444cc8f2c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "card-to-account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "deposit" character varying NOT NULL, "doTime" character varying NOT NULL, "providerCod" character varying NOT NULL, "description" character varying NOT NULL, "result" character varying NOT NULL, "name" character varying NOT NULL, "card" character varying NOT NULL, "trackId" character varying NOT NULL, CONSTRAINT "PK_7e30bfa3f30d7a8bf502bef35a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matche-mobile-national-code" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "mobile" character varying NOT NULL, "nationalCode" character varying NOT NULL, "isValid" boolean NOT NULL DEFAULT false, "trackId" character varying, "status" character varying NOT NULL, CONSTRAINT "PK_59e81e7266e01cae00efd80221f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sheba-detail" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "iban" character varying NOT NULL, "bankName" character varying NOT NULL, "deposit" character varying NOT NULL, "depositDescription" character varying NOT NULL, "depositComment" character varying NOT NULL, "depositStatus" character varying NOT NULL, "errorDescription" character varying NOT NULL, "depositOwners" text, CONSTRAINT "PK_94ff62ea7c0bcb7b8b6bfd64b3c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sheba-detail"`);
        await queryRunner.query(`DROP TABLE "matche-mobile-national-code"`);
        await queryRunner.query(`DROP TABLE "card-to-account"`);
        await queryRunner.query(`DROP TABLE "facility-national-code"`);
        await queryRunner.query(`DROP TABLE "card-detail"`);
        await queryRunner.query(`DROP TABLE "card-to-sheba"`);
        await queryRunner.query(`DROP TABLE "inquery_national_phone"`);
        await queryRunner.query(`DROP TABLE "acount_to_sheba"`);
        await queryRunner.query(`DROP TABLE "inquery_national_birth"`);
    }

}
