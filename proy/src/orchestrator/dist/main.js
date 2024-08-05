"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const orchestrator_module_1 = require("./orchestrator.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(orchestrator_module_1.OrchestratorModule);
    app.enableCors({
        origin: 'http://192.168.18.62:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map