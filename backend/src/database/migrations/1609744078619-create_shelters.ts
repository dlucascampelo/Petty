import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createShelters1609744078619 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //Realizar alterações no DB
    await queryRunner.createTable(
      new Table({
        name: "shelters",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "about",
            type: "text",
          },
          {
            name: "instructions",
            type: "text",
          },
          {
            name: "opening_hours",
            type: "varchar",
          },
          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Desfazer o que foi feito no método UP
    await queryRunner.dropTable("shelters");
  }
}
