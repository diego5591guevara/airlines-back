"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const pagos_module_1 = require("./pagos.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(pagos_module_1.PagosModule);
    await app.listen(3003);
}
bootstrap();
//# sourceMappingURL=main.js.map