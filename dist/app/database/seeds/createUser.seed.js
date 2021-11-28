"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const user_entity_1 = require("../../entities/user.entity");
class CreateUser {
    async run(factory) {
        await factory(user_entity_1.User)().create();
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=createUser.seed.js.map