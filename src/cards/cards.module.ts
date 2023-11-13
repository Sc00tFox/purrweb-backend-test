import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cards } from "./entities/cards.entity";
import { CardsController } from "./controllers/cards.controller";
import { CardsService } from "./services/cards.service";
import { ColumnsModule } from "src/columns/columns.module";

@Module({
    controllers: [CardsController],
    providers: [CardsService],
    imports: [
        TypeOrmModule.forFeature([Cards]),
        ColumnsModule
    ],
    exports: [CardsService]
})
export class CardsModule {}