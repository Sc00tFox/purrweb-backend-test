import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cards } from "../entities/cards.entity";
import { Repository } from "typeorm";
import { CreateCardDto, DeleteCardDto, UpdateCardDto } from "../dtos/cards.dto";

@Injectable()
export class CardsService {
    constructor(
        @InjectRepository(Cards) private readonly cardsRepository: Repository<Cards>
    ) {}

    async createCard(card: CreateCardDto) {
        return this.cardsRepository.save(this.cardsRepository.create(card));
    }

    async getCardById(id: number): Promise<Cards> {
        return this.cardsRepository.findOneOrFail({ where: { id }});
    }

    async updateCard(card: UpdateCardDto): Promise<Cards> {
        const findCard = await this.cardsRepository.findOne({ where: { id: card.id }});

        if (!findCard) {
            throw new NotFoundException("Card not Found!");
        }
        
        findCard.name = card.name;
        return this.cardsRepository.save(findCard);
    }

    async deleteCard(card: DeleteCardDto) {
        const findCard = await this.cardsRepository.findOne({ where: { id: card.id }});

        if (!findCard) {
            throw new NotFoundException("Card not Found!");
        }
        
        return this.cardsRepository.delete({ id: card.id });
    }
}