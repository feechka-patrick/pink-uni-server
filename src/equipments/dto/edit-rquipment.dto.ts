import { ApiProperty } from "@nestjs/swagger";

export class CreateEquipmentdDto {
    @ApiProperty({example: '2332143', description: 'Unique identificator'})
    id: number;

    @ApiProperty({example: 'dryer', description: 'Тип оборудования'})
    type: string;

    @ApiProperty({example: 'free', description: 'Статус : занято/свободно'})
    status: string;

    @ApiProperty({example: 'https://payment.net', description: 'Ссылка на оплату'})
    paymentURL: string;
}