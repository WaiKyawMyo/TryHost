"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const Todo_1 = __importDefault(require("./Routes/Todo"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({
    path: ".env"
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL
}));
app.use(express_1.default.json());
app.use('/api/', Todo_1.default);
const PORT = process.env.PORT || "4000";
app.listen(PORT, () => {
    (0, db_1.connectDB)();
    console.log("server is running on" + PORT);
});
