"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RecordsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const records_model_1 = require("./records.model");
const records_service_1 = require("./records.service");
const equipments_model_1 = require("../equipments/equipments.model");
const records_controller_1 = require("./records.controller");
let RecordsModule = RecordsModule_1 = class RecordsModule {
};
RecordsModule = RecordsModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [records_controller_1.RecordsController],
        providers: [records_service_1.RecordsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([records_model_1.Record, users_model_1.User, equipments_model_1.Equipment]),
            RecordsModule_1
        ],
        exports: [
            records_service_1.RecordsService
        ]
    })
], RecordsModule);
exports.RecordsModule = RecordsModule;
//# sourceMappingURL=records.module.js.map