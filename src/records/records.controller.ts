import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RecordsService } from './records.service';
import { Record } from './records.model';
import { CreateRecordDto } from './dto/create-record.dto';
import { EditRecordDto } from './dto/edit-record.dto';

@ApiTags("Записи")
@Controller('records')
export class RecordsController {
    constructor(private roleService: RecordsService) {}

    @Post()
    @ApiResponse({status:200, type: Record})
    create(@Body() dto: CreateRecordDto){
        return this.roleService.createRecord(dto);
    }

    @Post('/edit')
    @ApiResponse({status:200, type: Record})
    edit(@Body() dto: EditRecordDto){
        return this.roleService.editRecord(dto);
    }

    @Get('/:userId')
    @ApiResponse({status:200, type: [Record]})
    getByUser(@Param('userId') userId: string){
        return this.roleService.getRecordsByUser(userId);
    }

    @Get('/:equipmentId')
    @ApiResponse({status:200, type: [Record]})
    getByEquipment(@Param('equipmentId') equipmentId: string){
        return this.roleService.getRecordsByEquipment(equipmentId);
    }


}
