import { RecordsService } from './records.service';
import { Record } from './records.model';
import { CreateRecordDto } from './dto/create-record.dto';
import { EditRecordDto } from './dto/edit-record.dto';
export declare class RecordsController {
    private roleService;
    constructor(roleService: RecordsService);
    create(dto: CreateRecordDto): Promise<Record>;
    edit(dto: EditRecordDto): Promise<[number, Record[]]>;
    getByUser(userId: string): Promise<Record[]>;
    getByEquipment(equipmentId: string): Promise<Record[]>;
}
