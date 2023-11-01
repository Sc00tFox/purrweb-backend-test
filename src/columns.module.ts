import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Columns } from "./entities/columns.entity";

@Module({
    controllers: [],
    providers: [],
    imports: [
        TypeOrmModule.forFeature([Columns])
    ]
})
export class ColumnsModule {}