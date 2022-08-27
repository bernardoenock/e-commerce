import { MigrationInterface, QueryRunner } from "typeorm";

export class createBuyEntity1661617666724 implements MigrationInterface {
    name = 'createBuyEntity1661617666724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" double precision NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Carts" ("id" uuid NOT NULL, "subtotal" double precision NOT NULL, CONSTRAINT "PK_6088efe237f1e59de8fff0032d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buys" ("id" uuid NOT NULL, "total" double precision NOT NULL, "userId" uuid, CONSTRAINT "PK_34ecbce508fa8a98d0f23d9372a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carts_products_products" ("cartsId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_88c6c87a047a1483387693e891a" PRIMARY KEY ("cartsId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6d4a98ce8aefd303215e05d6c8" ON "carts_products_products" ("cartsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8689ca568058fafcbfc0fcd753" ON "carts_products_products" ("productsId") `);
        await queryRunner.query(`CREATE TABLE "buys_products_products" ("buysId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_7283360b4cbb13b5848e0135b7a" PRIMARY KEY ("buysId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_97ac7f3f3a5f957bd4a76727e4" ON "buys_products_products" ("buysId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e54a8e7d76477d7c0bc89d6b54" ON "buys_products_products" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD "cartId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_89502c44bd22c06e714c31c1e93" UNIQUE ("cartId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_89502c44bd22c06e714c31c1e93" FOREIGN KEY ("cartId") REFERENCES "Carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_3bb64d577595984a95f14ea0f71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carts_products_products" ADD CONSTRAINT "FK_6d4a98ce8aefd303215e05d6c8c" FOREIGN KEY ("cartsId") REFERENCES "Carts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "carts_products_products" ADD CONSTRAINT "FK_8689ca568058fafcbfc0fcd7539" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buys_products_products" ADD CONSTRAINT "FK_97ac7f3f3a5f957bd4a76727e4e" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buys_products_products" ADD CONSTRAINT "FK_e54a8e7d76477d7c0bc89d6b54a" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys_products_products" DROP CONSTRAINT "FK_e54a8e7d76477d7c0bc89d6b54a"`);
        await queryRunner.query(`ALTER TABLE "buys_products_products" DROP CONSTRAINT "FK_97ac7f3f3a5f957bd4a76727e4e"`);
        await queryRunner.query(`ALTER TABLE "carts_products_products" DROP CONSTRAINT "FK_8689ca568058fafcbfc0fcd7539"`);
        await queryRunner.query(`ALTER TABLE "carts_products_products" DROP CONSTRAINT "FK_6d4a98ce8aefd303215e05d6c8c"`);
        await queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_3bb64d577595984a95f14ea0f71"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cartId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e54a8e7d76477d7c0bc89d6b54"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97ac7f3f3a5f957bd4a76727e4"`);
        await queryRunner.query(`DROP TABLE "buys_products_products"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8689ca568058fafcbfc0fcd753"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6d4a98ce8aefd303215e05d6c8"`);
        await queryRunner.query(`DROP TABLE "carts_products_products"`);
        await queryRunner.query(`DROP TABLE "buys"`);
        await queryRunner.query(`DROP TABLE "Carts"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
