import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AuthController } from "./controllers/auth.controller";

@Global()
@Module({
    controllers: [AuthController],
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET_KEY'),
                signOptions: {
                    expiresIn: configService.getOrThrow<number>('jwt.expiresIn'),
                },
            }),
            inject: [ConfigService],
          }),
        UsersModule
    ],
    providers: [AuthService, JwtStrategy, ConfigService],
    exports: [AuthService]
})
export class AuthModule {}