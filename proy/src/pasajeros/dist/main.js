"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const pasajeros_module_1 = require("./pasajeros.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(pasajeros_module_1.PasajerosModule);
    app.enableCors({
        origin: 'http://192.168.18.62:3005',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    await app.listen(3005);
}
bootstrap();
//# sourceMappingURL=main.js.map