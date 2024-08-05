"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ClienteSchema = new mongoose_1.Schema({
    clienteId: { type: String, required: true },
    nombre: { type: String, required: true },
    mail: { type: String, required: true },
});
//# sourceMappingURL=clientes.schema.js.map