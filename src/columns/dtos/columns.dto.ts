import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateColumnsDto {
    @ApiProperty({ example: "Column 1", description: "Column title"})
    @IsNotEmpty()
    @IsString()
    title: string;
}

export class GetColumnDto {
    @ApiProperty({ example: "1", description: "Column id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({ example: "Column 1", description: "Column title"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ example: "1", description: "Column UserId"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}

export class GetColumnIdDto {
    @ApiProperty({ example: "1", description: "Column id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;
}