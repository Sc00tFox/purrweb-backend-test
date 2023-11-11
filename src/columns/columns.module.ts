import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Columns } from "./entities/columns.entity";
import { ColumnsService } from "./services/columns.service";
import { ColumnsController } from "./controllers/columns.controller";
import { UsersModule } from "src/users/users.module";

@Module({
    controllers: [ColumnsController],
    providers: [ColumnsService],
    imports: [
        TypeOrmModule.forFeature([Columns]),
        UsersModule
    ],
    exports: [ColumnsService]
})
export class ColumnsModule {}