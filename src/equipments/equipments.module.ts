import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EquipmentsController } from './equipment.controller';
import { EquipmentsService } from './equipments.service';
import { Equipment } from './equipments.model';
import { Record } from 'src/records/records.model';



@Module({
  controllers: [EquipmentsController],
  providers: [EquipmentsService],
  imports: [
    SequelizeModule.forFeature([Equipment, Record]),
    EquipmentsModule
  ],
  exports: [
    EquipmentsService
  ]
})
export class EquipmentsModule {}
