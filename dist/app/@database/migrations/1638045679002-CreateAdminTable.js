"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminTable1638045679002 = void 0;
const typeorm_1 = require("typeorm");
class CreateAdminTable1638045679002 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'admins',
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
    }
    async down(queryRunner) {
        await queryRunner.dropTable('admins');
    }
}
exports.CreateAdminTable1638045679002 = CreateAdminTable1638045679002;
//# sourceMappingURL=1638045679002-CreateAdminTable.js.map