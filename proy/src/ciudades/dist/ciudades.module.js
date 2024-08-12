"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadesModule = void 0;
const common_1 = require("@nestjs/common");
const ciudades_service_1 = require("./ciudades.service");
const ciudades_controller_1 = require("./ciudades.controller");
const mongoose_1 = require("@nestjs/mongoose");
const ciudades_schema_1 = require("./schemas/ciudades.schema");
let CiudadesModule = class CiudadesModule {
};
exports.CiudadesModule = CiudadesModule;
exports.CiudadesModule = CiudadesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/airlines'),
            mongoose_1.MongooseModule.forFeature([{ name: 'Ciudad', schema: ciudades_schema_1.CiudadSchema }]),
        ],
        providers: [ciudades_service_1.CiudadesService],
        controllers: [ciudades_controller_1.CiudadesController]
    })
], CiudadesModule);
//# sourceMappingURL=ciudades.module.js.map