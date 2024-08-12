"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservasSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ReservasSchema = new mongoose_1.Schema({
    origen: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Ciudad', required: true },
    destino: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Ciudad', required: true },
    pasajero: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Pasajero', required: true }],
    estado: { type: String, enum: ['reservado', 'cancelado'], default: 'reservado' },
});
//# sourceMappingURL=reserva.schema.js.map