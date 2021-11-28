"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerTable1638046310091 = void 0;
const typeorm_1 = require("typeorm");
class CreateCustomerTable1638046310091 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'customers',
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
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('customers');
    }
}
exports.CreateCustomerTable1638046310091 = CreateCustomerTable1638046310091;
//# sourceMappingURL=1638046310091-CreateCustomerTable.js.map