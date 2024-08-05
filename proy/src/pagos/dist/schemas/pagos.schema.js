"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagosSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PagosSchema = new mongoose_1.Schema({
    reservaId: { type: String, required: true },
    monto: { type: Number, required: true },
    estado: { type: String, enum: ['completado', 'reintegrado'], default: 'completado' },
});
//# sourceMappingURL=pagos.schema.js.map