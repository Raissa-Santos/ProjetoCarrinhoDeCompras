import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateShoppingCartTable1674587525167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: "user",
          columns: [
            {
              name: "id",
              type: "integer",
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: "increment"
            },
            {
              name: "description",
              type: "varchar"
            },
            {
              name: "unitprice",
              type: "decimal",
              scale: 2,
              precision: 10
            },
            {
              name: "quantity",
              type: "decimal",
              scale: 2,
              precision: 10
            },
            {
              name: "totalprice",
              type: "decimal",
              scale: 2,
              precision: 10
            },
            {
              name: "image",
              type: "varchar"
            }
          ]
        }));
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        //Defazer as ações realizadas em UP
        await queryRunner.dropTable("user");
      }

}
