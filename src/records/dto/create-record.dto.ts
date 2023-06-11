import { ApiProperty } from "@nestjs/swagger";

export class CreateRecordDto {
    @ApiProperty({example: '20.02.2023 14:45', description: 'Начало записи'})
    dateStart: Date;

    @ApiProperty({example: '20.02.2023 15:45', description: 'Конец записи'})
    dateEnd: Date;

    @ApiProperty({example: '134513', description: 'User id'})
    userId : number;

    @ApiProperty({example: '432888', description: 'Equipment id'})
    equipmentId : number;
}