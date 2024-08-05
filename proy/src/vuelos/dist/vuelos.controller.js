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
exports.VuelosController = void 0;
const common_1 = require("@nestjs/common");
const vuelos_dto_1 = require("./dto/vuelos.dto");
const reserva_dto_1 = require("./dto/reserva.dto");
const cancelar_dto_1 = require("./dto/cancelar.dto");
const vuelos_service_1 = require("./vuelos.service");
let VuelosController = class VuelosController {
    constructor(vuelosService) {
        this.vuelosService = vuelosService;
    }
    async create(res, createVueloDTO) {
        const vuelo = await this.vuelosService.createVuelo(createVueloDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Se registro correctamente',
            vuelo: vuelo
        });
    }
    async findAll() {
        return this.vuelosService.findAll();
    }
    findOne(id) {
        return this.vuelosService.findVueloById(id);
    }
    reserve(reservaVueloDTO) {
        return this.vuelosService.reserveSeats(reservaVueloDTO);
    }
    cancel(cancelReservaDTO) {
        return this.vuelosService.cancelReserva(cancelReservaDTO.reservaId);
    }
};
exports.VuelosController = VuelosController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, vuelos_dto_1.CreateVueloDTO]),
    __metadata("design:returntype", Promise)
], VuelosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VuelosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VuelosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('reserva'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reserva_dto_1.ReservaVueloDTO]),
    __metadata("design:returntype", void 0)
], VuelosController.prototype, "reserve", null);
__decorate([
    (0, common_1.Post)('cancel'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cancelar_dto_1.CancelReservaDTO]),
    __metadata("design:returntype", void 0)
], VuelosController.prototype, "cancel", null);
exports.VuelosController = VuelosController = __decorate([
    (0, common_1.Controller)('vuelos'),
    __metadata("design:paramtypes", [vuelos_service_1.VuelosService])
], VuelosController);
//# sourceMappingURL=vuelos.controller.js.map