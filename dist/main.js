"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const ENV_1 = require("./ENV");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        bodyParser: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(ENV_1.ENV.port);
    console.log(`🚀🚀🚀🚀🚀     API Running At Port : ${ENV_1.ENV.port}     🚀🚀🚀🚀🚀`);
}
bootstrap();
//# sourceMappingURL=main.js.map