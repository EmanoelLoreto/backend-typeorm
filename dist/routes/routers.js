"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ClientController_1 = __importDefault(require("../controllers/ClientController"));
var CourtController_1 = __importDefault(require("../controllers/CourtController"));
var ReservationController_1 = __importDefault(require("../controllers/ReservationController"));
var routers = (0, express_1.Router)();
routers.use("/client", ClientController_1.default);
routers.use("/court", CourtController_1.default);
routers.use("/reservation", ReservationController_1.default);
exports.default = routers;
