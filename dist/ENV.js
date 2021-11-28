"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = exports.ENV_STAGING = exports.ENV_PRODUCTION = exports.ENV_DEVELOPMENT = void 0;
const dotenv_1 = require("dotenv");
const path = require("path");
(0, dotenv_1.config)({
    path: path.join(process.cwd(), 'environments', `${process.env.NODE_ENV || 'development'}.env`),
});
exports.ENV_DEVELOPMENT = 'development';
exports.ENV_PRODUCTION = 'production';
exports.ENV_STAGING = 'staging';
exports.ENV = {
    port: +process.env.PORT,
    env: process.env.NODE_ENV || exports.ENV_DEVELOPMENT,
    isProduction: process.env.NODE_ENV === exports.ENV_PRODUCTION,
    isStaging: process.env.NODE_ENV === exports.ENV_STAGING,
    isDevelopment: process.env.NODE_ENV === exports.ENV_DEVELOPMENT,
    TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
    TYPEORM_HOST: process.env.TYPEORM_HOST,
    TYPEORM_PORT: Number(process.env.TYPEORM_PORT),
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    TYPEORM_SYNCHRONIZE: process.env.TYPEORM_SYNCHRONIZE,
    TYPEORM_LOGGING: process.env.TYPEORM_LOGGING,
    TYPEORM_AUTOLOAD_ENTITIES: process.env.TYPEORM_AUTOLOAD_ENTITIES,
};
//# sourceMappingURL=ENV.js.map