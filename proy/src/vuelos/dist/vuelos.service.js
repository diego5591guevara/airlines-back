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
exports.VuelosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let VuelosService = class VuelosService {
    constructor(vueloModel, reservaModel) {
        this.vueloModel = vueloModel;
        this.reservaModel = reservaModel;
    }
    async createVuelo(createVueloDTO) {
        const vuelo = new this.vueloModel(createVueloDTO);
        return vuelo.save();
    }
    async buscarVuelosPorOrigenDestinoFecha(origen, destino, fecha) {
        return this.vueloModel.find({
            origen,
            destino,
            fecha
        }).exec();
    }
    async buscarVuelosPorId(_id) {
        return this.vueloModel.find({
            _id
        }).exec();
    }
    async reserveSeats(reservaVueloDTO) {
        console.log(reservaVueloDTO);
        const reserva = new this.reservaModel({ ...reservaVueloDTO, status: 'reservado' });
        return reserva.save();
    }
    async findVueloById(id) {
        const vuelo = await this.vueloModel.findOne({ vueloId: id });
        if (!vuelo) {
            throw new common_1.NotFoundException(`Vuelo #${id} no encontrado`);
        }
        return vuelo;
    }
    async cancelReserva(reservaId) {
        const reserva = await this.reservaModel.findById(reservaId);
        if (!reserva) {
            throw new common_1.NotFoundException('Reservacion no encontrada');
        }
        reserva.estado = 'cancelado';
        return reserva.save();
    }
    async findAll() {
        return this.vueloModel.find().exec();
    }
};
exports.VuelosService = VuelosService;
exports.VuelosService = VuelosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Vuelo')),
    __param(1, (0, mongoose_2.InjectModel)('Reserva')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], VuelosService);
//# sourceMappingURL=vuelos.service.js.map