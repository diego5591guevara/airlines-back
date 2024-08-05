"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const vuelos_controller_1 = require("./vuelos.controller");
describe('VuelosController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [vuelos_controller_1.VuelosController],
        }).compile();
        controller = module.get(vuelos_controller_1.VuelosController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=vuelos.controller.spec.js.map