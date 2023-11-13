import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CardsService } from "../services/cards.service";
import { CardsResponseDto, CreateCardDto, DeleteCardDto, GetCardDto, UpdateCardDto } from "../dtos/cards.dto";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CardsUpdateGuard } from "src/guards/cards.update.guard";
import { CardsCreateGuard } from "src/guards/cards.create.guard";
import { CardsDeleteGuard } from "src/guards/cards.delete.guard";

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
    @UseGuards(CardsCreateGuard)
    @Post()
    async createCard(@Body() input: CreateCardDto) {
        return this.cardsService.createCard({name: input.name, columnId: input.columnId });
    }

    @ApiOperation({ summary: 'Get card by Id' })
    @ApiBody({ type: GetCardDto })
    @ApiResponse({ status: 200, type: CardsResponseDto })
    @Get(':id')
    async getCardById(@Param("id", ParseIntPipe) id: number) {
        return this.cardsService.getCardById(id);
    }

    @ApiOperation({ summary: 'Update card name' })
    @ApiBody({ type: UpdateCardDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @UseGuards(CardsUpdateGuard)
    @Put()
    async updateColumn(@Body() input: UpdateCardDto) {
        return this.cardsService.updateCard({ id: input.id, name: input.name, columnId: input.columnId });
    }

    @ApiOperation({ summary: 'Delete card by Id' })
    @ApiBody({ type: DeleteCardDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @UseGuards(CardsDeleteGuard)
    @Delete()
    async deleteUserColumns(@Body() input: DeleteCardDto) {
        return this.cardsService.deleteCard({ id: input.id, columnId: input.columnId });
    }
}