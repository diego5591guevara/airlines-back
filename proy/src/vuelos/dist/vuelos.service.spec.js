"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const vuelos_service_1 = require("./vuelos.service");
describe('VuelosService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [vuelos_service_1.VuelosService],
        }).compile();
        service = module.get(vuelos_service_1.VuelosService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=vuelos.service.spec.js.map