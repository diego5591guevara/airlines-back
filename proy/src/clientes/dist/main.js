"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const clientes_module_1 = require("./clientes.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(clientes_module_1.ClientesModule);
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map