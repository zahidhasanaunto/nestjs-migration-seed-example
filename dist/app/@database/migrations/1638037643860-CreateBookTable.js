"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookTable1638037643860 = void 0;
class CreateBookTable1638037643860 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE books (
	            id serial PRIMARY KEY,
	            "userName" VARCHAR ( 50 ) UNIQUE NOT NULL,
	            password VARCHAR ( 50 ) NOT NULL,
	            email VARCHAR ( 255 ) UNIQUE NOT NULL,
	            created_on TIMESTAMP NOT NULL,
                last_login TIMESTAMP 
            );
            
            `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE IF EXISTS books;`);
    }
}
exports.CreateBookTable1638037643860 = CreateBookTable1638037643860;
//# sourceMappingURL=1638037643860-CreateBookTable.js.map