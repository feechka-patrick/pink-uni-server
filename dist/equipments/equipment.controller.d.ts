import { CreateEquipmentDto } from "./dto/create-equipment.dto";
import { Equipment } from "./equipments.model";
import { EquipmentsService } from "./equipments.service";
export declare class EquipmentsController {
    private recordsService;
    constructor(recordsService: EquipmentsService);
    create(recordDto: CreateEquipmentDto): Promise<Equipment>;
    deleteEquipment(recordId: number): Promise<string>;
}
