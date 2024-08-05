"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ReservasSchema = new mongoose_1.Schema({
    vueloId: { type: String, required: true },
    clienteId: { type: String, required: true },
    asientos: { type: Number, required: true },
    estado: { type: String, enum: ['reservado', 'cancelado'], default: 'reservado' },
});
//# sourceMappingURL=reserva.schema.js.map