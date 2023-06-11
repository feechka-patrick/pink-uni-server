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
exports.CreateRecordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRecordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20.02.2023 14:45', description: 'Начало записи' }),
    __metadata("design:type", Date)
], CreateRecordDto.prototype, "dateStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20.02.2023 15:45', description: 'Конец записи' }),
    __metadata("design:type", Date)
], CreateRecordDto.prototype, "dateEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '134513', description: 'User id' }),
    __metadata("design:type", Number)
], CreateRecordDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '432888', description: 'Equipment id' }),
    __metadata("design:type", Number)
], CreateRecordDto.prototype, "equipmentId", void 0);
exports.CreateRecordDto = CreateRecordDto;
//# sourceMappingURL=create-record.dto.js.map