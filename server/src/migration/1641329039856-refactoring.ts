import {MigrationInterface, QueryRunner} from "typeorm";

export class refactoring1641329039856 implements MigrationInterface {
    name = 'refactoring1641329039856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "char_spell" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "character_id" integer NOT NULL, "spell_id" integer NOT NULL, CONSTRAINT "PK_60d12dfd0fb6256fe3dac856666" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "character" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "class" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "char_spell_id" integer NOT NULL, "title" character varying NOT NULL, "text" character varying NOT NULL, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "character" ADD CONSTRAINT "FK_04c2fb52adfa5265763de8c4464" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character" DROP CONSTRAINT "FK_04c2fb52adfa5265763de8c4464"`);
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "char_spell"`);
    }

}
