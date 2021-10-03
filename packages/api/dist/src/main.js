"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("./config");
const prisma_service_1 = require("./services/prisma/prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.enableCors({ origin: 'https://epikure.localhost', credentials: true });
    const swaggerOptions = new swagger_1.DocumentBuilder()
        .setTitle('Todos API')
        .setVersion('1.0')
        .addBearerAuth({ type: 'apiKey', in: 'header', name: 'Authorization' })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerOptions);
    swagger_1.SwaggerModule.setup('api', app, document);
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    await app.listen(config_1.Config.PORT);
    common_1.Logger.log(`Listening at http://localhost:${config_1.Config.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map