import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cards } from "./entities/cards.entity";

@Module({
    controllers: [],
    providers: [],
    imports: [
        TypeOrmModule.forFeature([Cards])
    ]
})
export class CardsModule {}