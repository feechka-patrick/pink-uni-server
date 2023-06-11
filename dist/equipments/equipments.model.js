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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const records_model_1 = require("../records/records.model");
let Equipment = class Equipment extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2332143', description: 'Unique identificator' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Equipment.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'dryer', description: 'Тип оборудования' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Equipment.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'free', description: 'Статус : занято/свободно' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Equipment.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://payment.net', description: 'Ссылка на оплату' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Equipment.prototype, "paymentURL", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => records_model_1.Record),
    __metadata("design:type", Array)
], Equipment.prototype, "records", void 0);
Equipment = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'equipments' })
], Equipment);
exports.Equipment = Equipment;
//# sourceMappingURL=equipments.model.js.map