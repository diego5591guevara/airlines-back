"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VuelosSchema = void 0;
const mongoose_1 = require("mongoose");
exports.VuelosSchema = new mongoose_1.Schema({
    origen: { type: String, required: true },
    destino: { type: String, required: true },
    avion: { type: String, required: true },
    fecha: { type: String, required: true },
    horaSalida: { type: String, required: true },
    horaLlegada: { type: String, required: true },
    duracion: { type: String, required: true },
    asientos: { type: Number, required: true },
    precio: { type: Number, required: true },
    estado: { type: String, enum: ['programado', 'cancelado', 'retrasado'], default: 'programado' },
});
//# sourceMappingURL=vuelos.schema.js.map