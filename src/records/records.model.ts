import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Equipment } from "src/equipments/equipments.model";
import { User } from "src/users/users.model";

interface RecordCreationAttrs{
    dateStart: Date;
    dateEnd: Date;
    userId : number;
    equipmentId : number;
}

@Table({tableName: 'records'})
export class Record extends Model<Record, RecordCreationAttrs> {
    @ApiProperty({example: '452654', description: 'Unique identificator'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '20.02.2023 14:45', description: 'Начало записи'})
    @Column({type: DataType.DATE, allowNull:false})
    dateStart: Date;

    @ApiProperty({example: '20.02.2023 15:45', description: 'Конец записи'})
    @Column({type: DataType.DATE, allowNull:false})
    dateEnd: Date;

    @ApiProperty({example: '134513', description: 'User id'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER,  unique:true, allowNull:false})
    userId : number;

    @ApiProperty({example: '432888', description: 'Equipment id'})
    @ForeignKey(() => Equipment)
    @Column({type: DataType.INTEGER,  unique:true, allowNull:false})
    equipmentId : number;
}
