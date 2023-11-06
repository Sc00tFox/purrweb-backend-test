import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entites/users.entity";

@Module({
    controllers: [],
    providers: [],
    imports: [
        TypeOrmModule.forFeature([Users])
    ]
})
export class UsersModule {}