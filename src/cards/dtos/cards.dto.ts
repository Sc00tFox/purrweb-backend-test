import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCardsDto {
    @ApiProperty({ example: "Card 1", description: "Card name"})
    @IsNotEmpty()
    @IsString()
    name: string;
}