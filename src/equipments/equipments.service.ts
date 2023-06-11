import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Equipment } from "./equipments.model";
import { CreateEquipmentDto } from "./dto/create-equipment.dto";


@Injectable()
export class EquipmentsService {

	constructor(@InjectModel(Equipment) private recordRepository: typeof Equipment) { }

	async createEquipment(dto: CreateEquipmentDto) {
		const record = await this.recordRepository.create(dto);
		return record;
	}

	async deleteEquipment(equipmentId: number) {
		await this.recordRepository.destroy({ where: { id: equipmentId } })
		return "success";
	}
}
