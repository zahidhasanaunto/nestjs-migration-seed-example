"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../entities/user.entity");
const typeorm_seeding_1 = require("typeorm-seeding");
(0, typeorm_seeding_1.define)(user_entity_1.User, (faker) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const user = new user_entity_1.User();
    user.name = `${firstName} ${lastName}`;
    return user;
});
//# sourceMappingURL=user.factory.js.map