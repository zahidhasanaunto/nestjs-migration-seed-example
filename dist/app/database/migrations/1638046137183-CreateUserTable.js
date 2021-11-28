"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1638046137183 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1638046137183 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
        await queryRunner.createIndex('users', new typeorm_1.TableIndex({
            name: 'IDX_USER_NAME',
            columnNames: ['name'],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex('users', 'IDX_USER_NAME');
        await queryRunner.dropTable('users');
    }
}
exports.CreateUserTable1638046137183 = CreateUserTable1638046137183;
//# sourceMappingURL=1638046137183-CreateUserTable.js.map