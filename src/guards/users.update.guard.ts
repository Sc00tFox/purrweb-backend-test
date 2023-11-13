import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UserUpdateDto } from "src/users/dtos/users.dto";

@Injectable()
export class UserUpdateGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.user.id;
        const input: UserUpdateDto = request.body;

        if (input.id === userId) {
            return true;
        } else {
            return false;
        }
    }
}