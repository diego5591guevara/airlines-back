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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrchestratorService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let OrchestratorService = class OrchestratorService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async proceso(obj) {
        try {
            console.log(obj);
            const vueloIda = await (0, rxjs_1.lastValueFrom)(this.httpService.get(`http://localhost:3001/vuelos/buscarVuelo?id=${obj.origen}`));
            if (!vueloIda.data) {
                throw new common_1.HttpException('Vuelo no encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            console.log("paso 1");
            const vueloVuelta = await (0, rxjs_1.lastValueFrom)(this.httpService.get(`http://localhost:3001/vuelos/buscarVuelo?id=${obj.destino}`));
            if (!vueloVuelta.data) {
                throw new common_1.HttpException('Vuelo no encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            console.log("paso 2");
            const respuestasPasajeros = [];
            for (const pasajero of obj.pasajeros) {
                pasajero.origenId = obj.origen;
                pasajero.vueltaId = obj.destino;
                pasajero.numero = pasajero.documento;
                console.log(pasajero);
                const pasajeros = await this.httpService.post('http://localhost:3005/pasajeros/create', pasajero).toPromise();
                console.log("dataPas");
                console.log(pasajeros.data);
                respuestasPasajeros.push(pasajeros.data._id);
            }
            ;
            console.log("paso 3");
            console.log(respuestasPasajeros);
            const objReserva = {
                origen: obj.origen,
                destino: obj.destino,
                pasajero: respuestasPasajeros
            };
            const reserva = this.httpService.post('http://localhost:3001/vuelos/reserva', objReserva);
            console.log(reserva);
            console.log("paso 4");
            const reservaValue = await (0, rxjs_1.lastValueFrom)(reserva);
            console.log("paso 4.q");
            if (!reservaValue.data) {
                throw new common_1.HttpException('Reserva con error', common_1.HttpStatus.NOT_FOUND);
            }
            console.log(reservaValue.data);
            const pago = this.httpService.post('http://localhost:3003/pagos', {
                reservaId: reservaValue.data._id,
                monto: obj.monto
            });
            const pagoValue = await (0, rxjs_1.lastValueFrom)(pago);
            console.log("paso 5");
            return {
                message: `Reserva y pago realizado con éxito. ID de Reserva: ${reservaValue.data._id}, Estado: ${pagoValue.data.estado}`,
                origen: vueloIda.data,
                destino: vueloVuelta.data,
                pasajeros: obj.pasajeros,
                reserva: reservaValue.data,
                pago: pagoValue.data,
                response: "success"
            };
        }
        catch (error) {
            if (error.response && error.response.config.url.includes('pagos')) {
                const cancelado = this.httpService.post('http://localhost:3001/vuelos/cancel', { reservaId: error.response.data.reservaId });
                await (0, rxjs_1.lastValueFrom)(cancelado);
                return {
                    message: "No se proceso el pago, se cancelo la reserva.",
                    response: "error"
                };
            }
            throw error;
        }
    }
};
exports.OrchestratorService = OrchestratorService;
exports.OrchestratorService = OrchestratorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], OrchestratorService);
//# sourceMappingURL=orchestrator.service.js.map