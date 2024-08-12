"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasajeroSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PasajeroSchema = new mongoose_1.Schema({
    origenId: { type: String, required: true },
    vueltaId: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    numero: { type: String, required: true }
});
//# sourceMappingURL=pasajero.schema.js.map