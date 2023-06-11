import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Record } from "src/records/records.model";

interface EquipmentCreationAttrs{
    type: string;
    paymentURL?: string;
}

@Table({tableName: 'equipments'})
export class Equipment extends Model<Equipment, EquipmentCreationAttrs> {
    @ApiProperty({example: '2332143', description: 'Unique identificator'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'dryer', description: 'Тип оборудования'})
    @Column({type: DataType.STRING, allowNull:false})
    type: string;

    @ApiProperty({example: 'free', description: 'Статус : занято/свободно'})
    @Column({type: DataType.STRING, allowNull:true})
    status: string;

    @ApiProperty({example: 'https://payment.net', description: 'Ссылка на оплату'})
    @Column({type: DataType.STRING, allowNull:true})
    paymentURL: string;

    @HasMany(() => Record)
    records: Record[]
}
