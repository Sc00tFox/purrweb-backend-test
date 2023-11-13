import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateColumnsDto {
    @ApiProperty({ example: "Column 1", description: "Column title"})
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ example: "1", description: "Column UserId"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}

export class GetColumnDto {
    @ApiProperty({ example: "1", description: "Column Id"})
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
    @ApiProperty({ example: "1", description: "Column Id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

export class UpdateColumnDto {
    @ApiProperty({ example: "1", description: "Column Id"})
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

export class DeleteColumnDto {
    @ApiProperty({ example: "1", description: "Column Id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({ example: "1", description: "Column UserId"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}