import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail, IsNumber } from "class-validator";

export class UserDto {
    @ApiProperty({ example: "myemal@exampe.com", description: "User email"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: "Str0ngP@$$w0rD!", description: "User password"})
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class GetUserDto {
    @ApiProperty({ example: "1", description: "UserID" })
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

export class UserResponse {
    @ApiProperty({ example: "1", description: "UserID" })
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty({ example: "myemal@exampe.com", description: "User email"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: "Str0ngP@$$w0rD!", description: "User password"})
    @IsNotEmpty()
    @IsString()
    password: string;
}