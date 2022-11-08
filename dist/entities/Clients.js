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
var Reservations_1 = __importDefault(require("./Reservations"));
var Client = /** @class */ (function () {
    function Client() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)('varchar', { length: 11 }),
        __metadata("design:type", String)
    ], Client.prototype, "cpf", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 150 }),
        __metadata("design:type", String)
    ], Client.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 40 }),
        __metadata("design:type", String)
    ], Client.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Client.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Client.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Reservations_1.default; }, function (reservation) { return reservation.clients; }),
        __metadata("design:type", Array)
    ], Client.prototype, "reservations", void 0);
    Client = __decorate([
        (0, typeorm_1.Entity)('client')
    ], Client);
    return Client;
}());
exports.default = Client;
