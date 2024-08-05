"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VuelosSchema = void 0;
const mongoose_1 = require("mongoose");
exports.VuelosSchema = new mongoose_1.Schema({
    vueloId: { type: String, required: true },
    origen: { type: String, required: true },
    destino: { type: String, required: true },
    fecha: { type: Date, required: true },
    asientos: { type: Number, required: true },
    precio: { type: Number, required: true },
    reservado: { type: [Number], default: [] },
});
//# sourceMappingURL=vuelos.schema.js.map