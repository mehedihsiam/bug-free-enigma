"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = exports.processSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.processSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.Process = mongoose_1.default.model("process", exports.processSchema);
