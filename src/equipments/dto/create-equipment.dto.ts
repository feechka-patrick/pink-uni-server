import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateEquipmentDto {
    @ApiProperty({example: 'dryer', description: 'Тип оборудования'})
    readonly type: string;

    @ApiProperty({example: 'https://payment.net', description: 'Ссылка на оплату'})
    readonly paymentURL: string;
}