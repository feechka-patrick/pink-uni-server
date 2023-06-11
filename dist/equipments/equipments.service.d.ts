import { Equipment } from "./equipments.model";
import { CreateEquipmentDto } from "./dto/create-equipment.dto";
export declare class EquipmentsService {
    private recordRepository;
    constructor(recordRepository: typeof Equipment);
    createEquipment(dto: CreateEquipmentDto): Promise<Equipment>;
    deleteEquipment(equipmentId: number): Promise<string>;
}
