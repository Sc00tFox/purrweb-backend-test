import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./entites/users.entity";
import { UsersController } from "./controllers/users.controller";
import { UserService } from "./services/users.service";

@Module({
    controllers: [UsersController],
    providers: [UserService],
    imports: [
        TypeOrmModule.forFeature([Users])
    ],
    exports: [UserService]
})
export class UsersModule {}