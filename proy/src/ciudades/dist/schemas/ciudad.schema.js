"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiudadSchema = void 0;
const mongoose_1 = require("mongoose");
const AeropuertoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    codigo: { type: String, required: true },
});
exports.CiudadSchema = new mongoose_1.Schema({
    ciudad: { type: String, required: true },
    pais: { type: String, required: true },
    aeropuertos: { type: [AeropuertoSchema], required: true }
});
//# sourceMappingURL=ciudad.schema.js.map