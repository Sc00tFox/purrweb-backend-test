import { Controller, Post, Get, Body, Param, ParseIntPipe } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthDto, AuthResponse } from "src/auth/dtos/auth.dto";
import { AuthService } from "src/auth/services/auth.service";
import { GetUserDto, UserDto, UserResponse } from "../dtos/users.dto";
import { UserService } from "../services/users.service";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) {}

    @ApiOperation({ summary: 'Register user' })
    @ApiBody({ type: AuthDto })
    @ApiResponse({ status: 200, type: AuthResponse })
    @Post()
    async signUp(@Body() input: AuthDto): Promise<AuthResponse> {
        return this.authService.singUp(input);
    }

    @ApiOperation({ summary: 'Get user by ID' })
    @ApiBody({ type: GetUserDto })
    @ApiResponse({ status: 200, type: UserResponse })
    @Get(':id')
    async getUser(@Param("id", ParseIntPipe)  id: number): Promise<UserDto> {
        return this.userService.getOneOrFail(id);
    }
}