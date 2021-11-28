import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class CreateUserTable1638046137183 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
        ],
      }),
      true
    );
      
      await queryRunner.createIndex(
        'users',
        new TableIndex({
          name: 'IDX_USER_NAME',
          columnNames: ['name'],
        })
      );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropIndex('users', 'IDX_USER_NAME');
    await queryRunner.dropTable('users');
  }
}
