import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1674586068170 implements MigrationInterface {

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
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Defazer as ações realizadas em UP
        await queryRunner.dropTable("user");
    }

}
