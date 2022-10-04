import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '192.168.233.68',
      port: 5432,
      username: 'postgres',
      password: 'Pass123*',
      database: 'nest',
      models: [],
      autoLoadModels: true,
    }),
    UsersModule,
  ]
})
export class AppModule{}
