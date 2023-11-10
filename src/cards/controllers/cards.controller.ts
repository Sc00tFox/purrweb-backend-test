import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CardsService } from "../services/cards.service";
import { CardsResponseDto, CreateCardDto, GetCardDto } from "../dtos/cards.dto";
import { Controller, Delete, Get, Param, Post } from "@nestjs/common";

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
    constructor(
        private readonly cardsService: CardsService
    ) {}

    @ApiOperation({ summary: 'Create card' })
    @ApiBody({ type: CreateCardDto })
    @ApiResponse({ status: 200 })
    @Post(':name')
    async createCard(@Param('name') name: string) {
        return this.cardsService.createCard(name);
    }

    @ApiOperation({ summary: 'Get card by Id' })
    @ApiBody({ type: GetCardDto })
    @ApiResponse({ status: 200, type: CardsResponseDto })
    @Get(':id')
    async getCardById(@Param('id') id: number) {
        return this.cardsService.getCardById(id);
    }

    @ApiOperation({ summary: 'Delete card by Id' })
    @ApiBody({ type: GetCardDto })
    @ApiResponse({ status: 200 })
    @Delete(':id')
    async deleteUserColumns(@Param('id') id: number) {
        return this.cardsService.deleteCardById(id);
    }
}