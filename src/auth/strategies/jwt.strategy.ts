import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from "passport-jwt";
import { Users } from "src/users/entites/users.entity";
import { UserService } from "src/users/services/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService, 
        private readonly userService: UserService
        ) {
            super({
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: configService.get<string>('jwt.secret')
        });
    }
      
    async validate(payload: { id: number }): Promise<Users> {
        const { id } = payload;
        return this.userService.getOneOrFail(id);
    }
}