import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import configuration from './config/configuration';

import { Users } from './users/entites/users.entity';
import { Cards } from './cards/entities/cards.entity';
import { Columns } from './columns/entities/columns.entity';
import { Comments } from './comments/entities/comments.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ColumnsModule } from './columns/columns.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        configuration
      ]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get<string>('database.host'),
        port: ConfigService.get<number>('database.port'),
        username: ConfigService.get<string>('database.username'),
        password: ConfigService.get<string>('database.password'),
        database: ConfigService.get<string>('database.database'),
        schema: ConfigService.get<string>('database.schema'),
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
    AuthModule,
    UsersModule,
    ColumnsModule,
    CardsModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
