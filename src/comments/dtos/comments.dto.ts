import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateCommentsDto {
    @ApiProperty({ example: "Mega super cool comment", description: "Comment text"})
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    body: string;
}