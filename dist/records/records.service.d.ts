import { Record } from "./records.model";
import { CreateRecordDto } from "./dto/create-record.dto";
import { EditRecordDto } from "./dto/edit-record.dto";
export declare class RecordsService {
    private recordRepository;
    constructor(recordRepository: typeof Record);
    createRecord(dto: CreateRecordDto): Promise<Record>;
    editRecord(dto: EditRecordDto): Promise<[number, Record[]]>;
    getRecordsByUser(userId: string): Promise<Record[]>;
    getRecordsByEquipment(equipmentId: string): Promise<Record[]>;
}
