"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ENV_1 = require("./ENV");
console.log(__dirname);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: ENV_1.ENV.TYPEORM_CONNECTION,
                host: ENV_1.ENV.TYPEORM_HOST,
                port: ENV_1.ENV.TYPEORM_PORT,
                username: ENV_1.ENV.TYPEORM_USERNAME,
                password: ENV_1.ENV.TYPEORM_PASSWORD,
                database: ENV_1.ENV.TYPEORM_DATABASE,
                autoLoadEntities: ENV_1.ENV.TYPEORM_AUTOLOAD_ENTITIES,
                synchronize: ENV_1.ENV.TYPEORM_SYNCHRONIZE,
                logging: ENV_1.ENV.TYPEORM_LOGGING,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map