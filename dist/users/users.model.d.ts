import { Model } from "sequelize-typescript";
import { Record } from "src/records/records.model";
import { Role } from "src/roles/roles.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    records: Record[];
}
export {};
