import { IsString } from "class-validator";

export class ChangeEmailDto {
    @IsString({message: "Should be a string"})
    readonly email: string;
    @IsString({message: "Should be a string"})
    readonly new_email: string;
    @IsString({message: "Should be a string"})
    readonly password: string;
}