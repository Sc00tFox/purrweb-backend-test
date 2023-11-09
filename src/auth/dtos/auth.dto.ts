import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsJWT, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
    @ApiProperty({ example: "myemal@exampe.com", description: "User email"})
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: "Str0ngP@$$w0rD!", description: "User password"})
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class AuthResponse {
    @ApiProperty({ example: "fgdgih32u-vghg2353-654kbkh", description: "token" })
    @IsJWT()
    jwtToken: string;
  }
  