import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDatesTable1709215940461 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"dates",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:"increment"
                    },
                    {
                        name:"day_date",
                        type:"datetime",
                    },
                    {
                        name:"artist_id",
                        type:"int"
                    },
                    {
                        name:"client_id",
                        type:"int"
                    }
                ],
                foreignKeys:[
                    {
                        columnNames:["artist_id"],
                        referencedTableName: "users",
                        referencedColumnNames:["id"]
                    },
                    {
                        columnNames:["client_id"],
                        referencedTableName: "users",
                        referencedColumnNames:["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
