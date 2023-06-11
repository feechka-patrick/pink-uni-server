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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const records_model_1 = require("./records.model");
let RecordsService = class RecordsService {
    constructor(recordRepository) {
        this.recordRepository = recordRepository;
    }
    async createRecord(dto) {
        const record = await this.recordRepository.create(dto);
        return record;
    }
    async editRecord(dto) {
        const record = await this.recordRepository.update({ dateStart: dto.dateStart,
            dateEnd: dto.dateEnd }, { where: { id: dto.id } });
        return record;
    }
    async getRecordsByUser(userId) {
        const records = await this.recordRepository.findAll({ where: { userId: userId }, include: { all: true } });
        return records;
    }
    async getRecordsByEquipment(equipmentId) {
        const records = await this.recordRepository.findAll({ where: { equipmentId: equipmentId }, include: { all: true } });
        return records;
    }
};
RecordsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(records_model_1.Record)),
    __metadata("design:paramtypes", [Object])
], RecordsService);
exports.RecordsService = RecordsService;
//# sourceMappingURL=records.service.js.map