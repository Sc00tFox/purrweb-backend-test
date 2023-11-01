import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import databseConfig from './config/databse.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get<string>('db.host'),
        port: ConfigService.get<number>('db.port'),
        username: ConfigService.get<string>('db.username'),
        password: ConfigService.get<string>('db.password'),
        database: ConfigService.get<string>('db.database'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
