import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Record } from './records.model';
import { RecordsService } from './records.service';
import { Equipment } from 'src/equipments/equipments.model';
import { RecordsController } from './records.controller';


@Module({
  controllers: [RecordsController],
  providers: [RecordsService],
  imports: [
    SequelizeModule.forFeature([Record, User, Equipment]),
    RecordsModule
  ],
  exports: [
    RecordsService
  ]
})
export class RecordsModule {}
