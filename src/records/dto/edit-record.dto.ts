import { ApiProperty } from "@nestjs/swagger";

export class EditRecordDto {
    @ApiProperty({example: '452654', description: 'Unique identificator'})
    id: number;

    @ApiProperty({example: '20.02.2023 14:45', description: 'Начало записи'})
    dateStart: Date;

    @ApiProperty({example: '20.02.2023 15:45', description: 'Конец записи'})
    dateEnd: Date;
}