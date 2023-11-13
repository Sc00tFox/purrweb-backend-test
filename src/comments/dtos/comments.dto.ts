import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    @ApiProperty({ example: "Mega super cool comment", description: "Comment text"})
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    body: string;

    @ApiProperty({ example: "1", description: "CardId"})
    @IsNotEmpty()
    @IsNumber()
    cardId: number;

    @ApiProperty({ example: "1", description: "Comment UserId"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}

export class GetCommentDto {
    @ApiProperty({ example: "1", description: "Comment Id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({ example: "My First Comment", description: "Comment body"})
    @IsNotEmpty()
    @IsString()
    body: string;

    @ApiProperty({ example: "1", description: "Comment CardId"})
    @IsNotEmpty()
    @IsNumber()
    cardId: number;

    @ApiProperty({ example: "1", description: "Comment UserId"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}

export class GetCommentIdDto {
    @ApiProperty({ example: "1", description: "Comment Id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

export class UpdateCommentDto {
    @ApiProperty({ example: "1", description: "Comment Id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;
    
    @ApiProperty({ example: "My First Comment (Fixed)", description: "Comment body"})
    @IsNotEmpty()
    @IsString()
    body: string;

    @ApiProperty({ example: "1", description: "Comment UserId"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}

export class DeleteCommentDto {
    @ApiProperty({ example: "1", description: "Comment Id"})
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({ example: "1", description: "Comment UserId"})
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}