import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCardDto {
    @ApiProperty({ example: "Card 1", description: "Card name"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "1", description: "Column Id" })
    @IsNotEmpty()
    @IsNumber()
    columnId: number;
}

export class GetCardDto {
    @ApiProperty({ example: "1", description: "Card Id" })
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

export class CardsResponseDto {
    @ApiProperty({ example: "1", description: "Card Id" })
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({ example: "Card 1", description: "Card name" })
    @IsNotEmpty()
    @IsNumber()
    name: string;

    @ApiProperty({ example: "1", description: "Column Id" })
    @IsNotEmpty()
    @IsNumber()
    columnId: number;
}

export class UpdateCardDto {
    @ApiProperty({ example: "1", description: "Card Id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;
    
    @ApiProperty({ example: "Card 1", description: "Card name"})
    @IsNotEmpty()
    @IsString()
    name: string;
}