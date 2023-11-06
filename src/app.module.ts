import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import databseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';

import { Users } from './users/entites/users.entity';
import { Cards } from './cards/entities/cards.entity';
import { Columns } from './columns/entities/columns.entity';
import { Comments } from './comments/entities/comments.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        databseConfig,
        jwtConfig,
      ]
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
        schema: ConfigService.get<string>('db.schema'),
        entities: [
          Cards,
          Columns,
          Comments,
          Users
        ],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.JWT_SECRET_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
