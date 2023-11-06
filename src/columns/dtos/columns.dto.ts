import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateColumnsDto {
    @ApiProperty({ example: "Column 1", description: "Column title"})
    @IsNotEmpty()
    @IsString()
    title: string;
}