import { Model } from "sequelize-typescript";
interface RecordCreationAttrs {
    dateStart: Date;
    dateEnd: Date;
    userId: number;
    equipmentId: number;
}
export declare class Record extends Model<Record, RecordCreationAttrs> {
    id: number;
    dateStart: Date;
    dateEnd: Date;
    userId: number;
    equipmentId: number;
}
export {};
