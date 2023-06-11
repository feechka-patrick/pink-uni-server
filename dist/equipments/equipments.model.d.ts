import { Model } from "sequelize-typescript";
import { Record } from "src/records/records.model";
interface EquipmentCreationAttrs {
    type: string;
    paymentURL?: string;
}
export declare class Equipment extends Model<Equipment, EquipmentCreationAttrs> {
    id: number;
    type: string;
    status: string;
    paymentURL: string;
    records: Record[];
}
export {};
