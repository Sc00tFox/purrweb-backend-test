import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cards } from "./entities/cards.entity";
import { CardsController } from "./controllers/cards.controller";
import { CardsService } from "./services/cards.service";

@Module({
    controllers: [CardsController],
    providers: [CardsService],
    imports: [
        TypeOrmModule.forFeature([Cards])
    ],
    exports: [CardsService]
})
export class CardsModule {}