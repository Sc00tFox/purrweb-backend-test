import { Controller, Post, Get, Body, Param, ParseIntPipe, UseGuards, Put, Delete } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthDto, AuthResponse } from "src/auth/dtos/auth.dto";
import { AuthService } from "src/auth/services/auth.service";
import { GetUserDto, UserDeleteDto, UserDto, UserResponseDto, UserUpdateDto } from "../dtos/users.dto";
import { UserService } from "../services/users.service";
import { AuthGuard } from "@nestjs/passport";
import { UserUpdateGuard } from "src/guards/users.update.guard";
import { UserDeleteGuard } from "src/guards/users.delete.guard";

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
    @ApiResponse({ status: 200, type: UserResponseDto })
    @Get(':id')
    async getUser(@Param("id", ParseIntPipe)  id: number): Promise<UserDto> {
        return this.userService.getOneOrFail(id);
    }

    @ApiOperation({ summary: 'Update user data' })
    @ApiBody({ type: UserUpdateDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @UseGuards(UserUpdateGuard)
    @Put()
    async updateColumn(@Body() input: UserUpdateDto) {
        return this.userService.updateUser({ id: input.id, email: input.email, password: input.password });
    }

    @ApiOperation({ summary: 'Delete user' })
    @ApiBody({ type: UserDeleteDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @UseGuards(UserDeleteGuard)
    @Delete()
    async deleteUserColumns(@Body() input: UserDeleteDto) {
        return this.userService.deleteUser({ id: input.id });
    }
}