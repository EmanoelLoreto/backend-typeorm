"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Clients_1 = __importDefault(require("./Clients"));
var Courts_1 = __importDefault(require("./Courts"));
var Reservation = /** @class */ (function () {
    function Reservation() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], Reservation.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('decimal'),
        __metadata("design:type", Number)
    ], Reservation.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.Column)('boolean', { default: false }),
        __metadata("design:type", Boolean)
    ], Reservation.prototype, "confirmed", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Reservation.prototype, "begin_datetime", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Reservation.prototype, "end_datetime", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Reservation.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Reservation.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Reservation.prototype, "client_cpf", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Reservation.prototype, "court_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Clients_1.default; }, function (client) { return client.cpf; }),
        __metadata("design:type", Array)
    ], Reservation.prototype, "clients", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Courts_1.default; }, function (court) { return court.id; }),
        __metadata("design:type", Array)
    ], Reservation.prototype, "courts", void 0);
    Reservation = __decorate([
        (0, typeorm_1.Entity)('reservation')
    ], Reservation);
    return Reservation;
}());
exports.default = Reservation;
