import { Controller, Post, Body, UseGuards, Get } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateEquipmentDto } from "./dto/create-equipment.dto";
import { Record } from "src/records/records.model";
import { Equipment } from "./equipments.model";
import { EquipmentsService } from "./equipments.service";

@ApiTags('Оборудование')
@Controller('equipments')
export class EquipmentsController {
    constructor(private recordsService: EquipmentsService) {}

    @ApiOperation({summary: 'Создание записи'})
    @ApiResponse({status:200, type: Equipment})
    @Post()
    create(@Body() recordDto: CreateEquipmentDto){
        return this.recordsService.createEquipment(recordDto);
    }

    @ApiOperation({summary: 'Удаление записи'})
    @ApiResponse({status:200, type: Equipment})
    @Post('/delete')
    deleteEquipment(@Body() recordId: number){
        return this.recordsService.deleteEquipment(recordId);
    }

}
