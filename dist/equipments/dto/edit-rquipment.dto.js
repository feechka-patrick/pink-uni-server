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
exports.CreateEquipmentdDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateEquipmentdDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2332143', description: 'Unique identificator' }),
    __metadata("design:type", Number)
], CreateEquipmentdDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'dryer', description: 'Тип оборудования' }),
    __metadata("design:type", String)
], CreateEquipmentdDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'free', description: 'Статус : занято/свободно' }),
    __metadata("design:type", String)
], CreateEquipmentdDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://payment.net', description: 'Ссылка на оплату' }),
    __metadata("design:type", String)
], CreateEquipmentdDto.prototype, "paymentURL", void 0);
exports.CreateEquipmentdDto = CreateEquipmentdDto;
//# sourceMappingURL=edit-rquipment.dto.js.map