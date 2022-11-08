"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Reservations_1 = __importDefault(require("../entities/Reservations"));
var data_source_1 = require("../database/data-source");
var http_exeception_1 = __importDefault(require("../shared/http.exeception"));
var date_fns_1 = require("date-fns");
var reservationsRepository = data_source_1.AppDataSource.getRepository(Reservations_1.default);
var getReservationByBeginDatetime = function (reservationBeginDatetime) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, reservationsRepository.findOneBy({ begin_datetime: reservationBeginDatetime })];
    });
}); };
var newReservation = function (reservation) { return __awaiter(void 0, void 0, void 0, function () {
    var reservationToCreate, existsReservation, createdReservation;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                reservationToCreate = __assign(__assign({}, reservation), { end_datetime: new Date(reservation.begin_datetime) });
                return [4 /*yield*/, getReservationByBeginDatetime(reservationToCreate.begin_datetime)];
            case 1:
                existsReservation = _a.sent();
                if (existsReservation) {
                    throw new http_exeception_1.default(400, "This period is not available!");
                }
                reservationToCreate.begin_datetime = new Date(reservationToCreate.begin_datetime);
                reservationToCreate.end_datetime.setHours(reservationToCreate.end_datetime.getHours() + 2);
                return [4 /*yield*/, reservationsRepository.save(reservationToCreate)];
            case 2:
                createdReservation = _a.sent();
                return [2 /*return*/, createdReservation];
        }
    });
}); };
var getReservations = function () {
    return reservationsRepository.find({ relations: { clients: true, courts: true } });
};
var getReservationById = function (id) {
    return reservationsRepository.findOneBy({ id: id });
};
var updateReservation = function (id, reservation) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reservationsRepository.update(id, reservation)];
            case 1:
                _a.sent();
                return [2 /*return*/, reservation];
        }
    });
}); };
var removeReservation = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var reservationExist, timeDifference;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, reservationsRepository.findOneBy({ id: id })];
            case 1:
                reservationExist = _a.sent();
                if (!reservationExist) {
                    throw new http_exeception_1.default(400, "Not Found: Not Record with the Id: ".concat(id, " was found!"));
                }
                timeDifference = (0, date_fns_1.differenceInHours)(new Date(reservationExist.begin_datetime), new Date());
                if (timeDifference <= 4) {
                    throw new http_exeception_1.default(400, "You can't remove the reservation! You have to Cancel this reservation!");
                }
                return [4 /*yield*/, reservationsRepository.delete(id)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = { getReservations: getReservations, newReservation: newReservation, getReservationById: getReservationById, updateReservation: updateReservation, removeReservation: removeReservation };
