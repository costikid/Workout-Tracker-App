"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDB = () => {
    const MONGODB_URI = "mongodb://127.0.0.1:27017/workoutApp";
    return mongoose_1.default.connect(MONGODB_URI);
};
exports.connectToDB = connectToDB;
