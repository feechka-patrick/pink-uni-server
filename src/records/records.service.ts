import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Record } from "./records.model";
import { CreateRecordDto } from "./dto/create-record.dto";
import { EditRecordDto } from "./dto/edit-record.dto";


@Injectable()
export class RecordsService {

	constructor(@InjectModel(Record) private recordRepository: typeof Record) { }

	async createRecord(dto: CreateRecordDto) {
		const record = await this.recordRepository.create(dto);
		return record;
	}

	async deleteRecord(id: string) {
		const record = await this.recordRepository.destroy({ where: { id: id } });
		return 'success';
	}

	async editRecord(dto: EditRecordDto) {
		const record = await this.recordRepository.update(
			{ dateStart: dto.dateStart,
			  dateEnd: dto.dateEnd }, 
			{ where: { id: dto.id } });
		return record;
	}

	async getRecordsByUser(userId: string){
		const records = await this.recordRepository.findAll({ where: { userId: userId }, include: { all: true } })
		return records;
	}

	async getRecordsByEquipment(equipmentId: string){
		const records = await this.recordRepository.findAll({ where: { equipmentId: equipmentId }, include: { all: true } })
		return records;
	}

}
