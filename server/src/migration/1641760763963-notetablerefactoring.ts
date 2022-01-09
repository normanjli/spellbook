import {MigrationInterface, QueryRunner} from "typeorm";

export class notetablerefactoring1641760763963 implements MigrationInterface {
    name = 'notetablerefactoring1641760763963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("name" character varying NOT NULL, "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e12875dfb3b1d92d7d7c5377e22" PRIMARY KEY ("email"))`);
        await queryRunner.query(`CREATE TABLE "character" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "class" character varying NOT NULL, "userEmail" character varying, CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "char_spell" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "spell_id" character varying NOT NULL, "characterId" integer, CONSTRAINT "PK_60d12dfd0fb6256fe3dac856666" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "text" text NOT NULL, "charSpellId" integer, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "character" ADD CONSTRAINT "FK_5ae16e073368631dfea6c1cbf40" FOREIGN KEY ("userEmail") REFERENCES "user"("email") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "char_spell" ADD CONSTRAINT "FK_02d86d85fd48f9901a277db40c3" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_4c5649a01b718df95c7cd17f693" FOREIGN KEY ("charSpellId") REFERENCES "char_spell"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_4c5649a01b718df95c7cd17f693"`);
        await queryRunner.query(`ALTER TABLE "char_spell" DROP CONSTRAINT "FK_02d86d85fd48f9901a277db40c3"`);
        await queryRunner.query(`ALTER TABLE "character" DROP CONSTRAINT "FK_5ae16e073368631dfea6c1cbf40"`);
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "char_spell"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
