"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VuelosModule = void 0;
const common_1 = require("@nestjs/common");
const vuelos_service_1 = require("./vuelos.service");
const vuelos_controller_1 = require("./vuelos.controller");
const mongoose_1 = require("@nestjs/mongoose");
const vuelos_schema_1 = require("./schemas/vuelos.schema");
const reserva_schema_1 = require("./schemas/reserva.schema");
let VuelosModule = class VuelosModule {
};
exports.VuelosModule = VuelosModule;
exports.VuelosModule = VuelosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/airlines'),
            mongoose_1.MongooseModule.forFeature([
                { name: 'Vuelo', schema: vuelos_schema_1.VuelosSchema }
            ]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Reserva', schema: reserva_schema_1.ReservasSchema }]),
        ],
        providers: [vuelos_service_1.VuelosService],
        controllers: [vuelos_controller_1.VuelosController]
    })
], VuelosModule);
//# sourceMappingURL=vuelos.module.js.map