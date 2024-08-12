"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasajerosController = void 0;
const common_1 = require("@nestjs/common");
const pasajeros_service_1 = require("./pasajeros.service");
const pasajero_dto_1 = require("./dto/pasajero.dto");
let PasajerosController = class PasajerosController {
    constructor(pasajerosService) {
        this.pasajerosService = pasajerosService;
    }
    async create(createPasajeroDTO) {
        console.log(createPasajeroDTO);
        return this.pasajerosService.createPasajero(createPasajeroDTO);
    }
    async buscarVuelo(_id) {
        return this.pasajerosService.buscarPasajeroPorId(_id);
    }
};
exports.PasajerosController = PasajerosController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pasajero_dto_1.CreatePasajeroDTO]),
    __metadata("design:returntype", Promise)
], PasajerosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('buscarPasajero'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PasajerosController.prototype, "buscarVuelo", null);
exports.PasajerosController = PasajerosController = __decorate([
    (0, common_1.Controller)('pasajeros'),
    __metadata("design:paramtypes", [pasajeros_service_1.PasajerosService])
], PasajerosController);
//# sourceMappingURL=pasajeros.controller.js.map