import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "../services/auth.service";
import { AuthDto, AuthResponse } from "../dtos/auth.dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @ApiOperation({ summary: 'User authentication' })
    @ApiBody({ type: AuthDto })
    @ApiResponse({ status: 200, type: AuthResponse })
    @Post()
    async singIn(@Body() input: AuthDto): Promise<AuthResponse> {
        return this.authService.signIn(input);
    }
}