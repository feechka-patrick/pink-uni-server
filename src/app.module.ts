import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { Record } from "./records/records.model";
import { RecordsModule } from "./records/records.module";
import { EquipmentsModule } from "./equipments/equipments.module";
import { Equipment } from "./equipments/equipments.model";

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.env`
		}),
		SequelizeModule.forRoot({
		  dialect: 'postgres',
		  host: process.env.POSTGRES_HOST,
		  port: Number(process.env.POSTGRES_PORT),
		  username: process.env.POSTGRES_USER,
		  password: process.env.POSTGRES_PASSWORD,
		  database: process.env.POSTGRES_DB,
		  models: [User, Role, UserRoles, Record, Equipment],
		  autoLoadModels: true
		}),
		UsersModule,
		RolesModule,
		AuthModule,
		RecordsModule,
		EquipmentsModule
	  ],
})
export class AppModule {}