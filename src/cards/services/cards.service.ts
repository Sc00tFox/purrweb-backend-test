import { Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cards } from "../entities/cards.entity";
import { Repository } from "typeorm";
import { CreateCardDto } from "../dtos/cards.dto";

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Cards) private readonly cardsRepository: Repository<Cards>
    ) {}

    async createCard(card: CreateCardDto) {
        return this.cardsRepository.save(this.cardsRepository.create(card));
    }

    async getCardById(@Param("id", ParseIntPipe) id: number): Promise<Cards> {
        return this.cardsRepository.findOneOrFail({ where: { id }});
    }

    async deleteCardById(@Param("id", ParseIntPipe) id: number) {
        return this.cardsRepository.delete({ id: id });
    }
}