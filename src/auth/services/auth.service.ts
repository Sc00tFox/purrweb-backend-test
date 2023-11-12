import { ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/services/users.service";
import { AuthDto, AuthResponse } from "../dtos/auth.dto";
import * as crypto from "crypto";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async singUp(dto: AuthDto): Promise<AuthResponse> {
        const isUserExist = await this.userService.isUserExist(dto.email);

        if (isUserExist) {
            throw new ForbiddenException("User is already exists!");
        }

        const user = await this.userService.create(dto);
        const jwtToken = await this.jwtService.signAsync({ id: user.id });
        return { jwtToken } as AuthResponse;
    }

    async signIn(dto: AuthDto): Promise<AuthResponse> {
        const password = crypto.createHmac("sha512", dto.password).digest("hex");
        const user = await this.userService.getByEmailAndPassword(dto.email, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        const jwtToken = await this.jwtService.signAsync({ id: user.id });
        return { jwtToken } as AuthResponse;
    }
}