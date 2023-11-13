import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UserDeleteDto } from "src/users/dtos/users.dto";

@Injectable()
export class UserDeleteGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.user.id;
        const input: UserDeleteDto = request.body;

        if (input.id === userId) {
            return true;
        } else {
            return false;
        }
    }
}