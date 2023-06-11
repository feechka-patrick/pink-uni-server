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
exports.Record = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const equipments_model_1 = require("../equipments/equipments.model");
const users_model_1 = require("../users/users.model");
let Record = class Record extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '452654', description: 'Unique identificator' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Record.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20.02.2023 14:45', description: 'Начало записи' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false }),
    __metadata("design:type", Date)
], Record.prototype, "dateStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20.02.2023 15:45', description: 'Конец записи' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, allowNull: false }),
    __metadata("design:type", Date)
], Record.prototype, "dateEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '134513', description: 'User id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, allowNull: false }),
    __metadata("design:type", Number)
], Record.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '432888', description: 'Equipment id' }),
    (0, sequelize_typescript_1.ForeignKey)(() => equipments_model_1.Equipment),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, allowNull: false }),
    __metadata("design:type", Number)
], Record.prototype, "equipmentId", void 0);
Record = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'records' })
], Record);
exports.Record = Record;
//# sourceMappingURL=records.model.js.map