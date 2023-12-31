"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EquipmentsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const equipment_controller_1 = require("./equipment.controller");
const equipments_service_1 = require("./equipments.service");
const equipments_model_1 = require("./equipments.model");
const records_model_1 = require("../records/records.model");
let EquipmentsModule = EquipmentsModule_1 = class EquipmentsModule {
};
EquipmentsModule = EquipmentsModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [equipment_controller_1.EquipmentsController],
        providers: [equipments_service_1.EquipmentsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([equipments_model_1.Equipment, records_model_1.Record]),
            EquipmentsModule_1
        ],
        exports: [
            equipments_service_1.EquipmentsService
        ]
    })
], EquipmentsModule);
exports.EquipmentsModule = EquipmentsModule;
//# sourceMappingURL=equipments.module.js.map