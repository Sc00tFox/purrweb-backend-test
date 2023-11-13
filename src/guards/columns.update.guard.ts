import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UpdateColumnDto } from "src/columns/dtos/columns.dto";

@Injectable()
export class ColumnUpdateGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.user.id;
        const input: UpdateColumnDto = request.body;

        if (input.userId === userId) {
            return true;
        } else {
            return false;
        }
    }
}