"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const ciudades_module_1 = require("./ciudades.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(ciudades_module_1.CiudadesModule);
    app.enableCors({
        origin: 'http://192.168.18.62:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    await app.listen(3004);
}
bootstrap();
//# sourceMappingURL=main.js.map