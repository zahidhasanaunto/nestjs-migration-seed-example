"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserForeignKeyInCustomerTable1638046649521 = void 0;
const typeorm_1 = require("typeorm");
class AddUserForeignKeyInCustomerTable1638046649521 {
    async up(queryRunner) {
        await queryRunner.addColumn('customers', new typeorm_1.TableColumn({
            name: 'userId',
            type: 'uuid',
        }));
        await queryRunner.createForeignKey('customers', new typeorm_1.TableForeignKey({
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('customers');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('userId') !== -1);
        await queryRunner.dropForeignKey('customers', foreignKey);
        await queryRunner.dropColumn('customers', 'userId');
    }
}
exports.AddUserForeignKeyInCustomerTable1638046649521 = AddUserForeignKeyInCustomerTable1638046649521;
//# sourceMappingURL=1638046649521-AddUserForeignKeyInCustomerTable.js.map