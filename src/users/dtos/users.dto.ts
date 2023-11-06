import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "myemal@exampe.com", description: "User email"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: "Str0ngP@$$w0rD!", description: "User password"})
    @IsNotEmpty()
    @IsString()
    password: string;
}