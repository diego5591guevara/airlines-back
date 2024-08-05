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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ClientesService = class ClientesService {
    constructor(clienteModel) {
        this.clienteModel = clienteModel;
    }
    async createCliente(createClienteDTO) {
        const cliente = new this.clienteModel(createClienteDTO);
        return cliente.save();
    }
    async updateCliente(id, updateCustomerDTO) {
        const cliente = await this.clienteModel.findByIdAndUpdate(id, updateCustomerDTO, { new: true });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente #${id} no encontrado`);
        }
        return cliente;
    }
    async findAllClientes() {
        return this.clienteModel.find().exec();
    }
    async findClienteById(id) {
        const cliente = await this.clienteModel.findOne({ clienteId: id });
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente #${id} no encontrado`);
        }
        return cliente;
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Cliente')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map