import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CardsService } from "../services/cards.service";
import { CardsResponseDto, CreateCardDto, GetCardDto } from "../dtos/cards.dto";
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
    constructor(
        private readonly cardsService: CardsService
    ) {}

    @ApiOperation({ summary: 'Create card' })
    @ApiBody({ type: CreateCardDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createCard(@Body() input: CreateCardDto) {
        return this.cardsService.createCard(input);
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
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteUserColumns(@Param('id') id: number) {
        return this.cardsService.deleteCardById(id);
    }
}