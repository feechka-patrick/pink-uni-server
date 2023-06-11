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
exports.RecordsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const records_service_1 = require("./records.service");
const records_model_1 = require("./records.model");
const create_record_dto_1 = require("./dto/create-record.dto");
const edit_record_dto_1 = require("./dto/edit-record.dto");
let RecordsController = class RecordsController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(dto) {
        return this.roleService.createRecord(dto);
    }
    edit(dto) {
        return this.roleService.editRecord(dto);
    }
    getByUser(userId) {
        return this.roleService.getRecordsByUser(userId);
    }
    getByEquipment(equipmentId) {
        return this.roleService.getRecordsByEquipment(equipmentId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 200, type: records_model_1.Record }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_record_dto_1.CreateRecordDto]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 200, type: records_model_1.Record }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_record_dto_1.EditRecordDto]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)('/:userId'),
    (0, swagger_1.ApiResponse)({ status: 200, type: [records_model_1.Record] }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Get)('/:equipmentId'),
    (0, swagger_1.ApiResponse)({ status: 200, type: [records_model_1.Record] }),
    __param(0, (0, common_1.Param)('equipmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecordsController.prototype, "getByEquipment", null);
RecordsController = __decorate([
    (0, swagger_1.ApiTags)("Записи"),
    (0, common_1.Controller)('records'),
    __metadata("design:paramtypes", [records_service_1.RecordsService])
], RecordsController);
exports.RecordsController = RecordsController;
//# sourceMappingURL=records.controller.js.map