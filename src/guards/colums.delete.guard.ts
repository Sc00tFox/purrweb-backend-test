import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { DeleteColumnDto } from "src/columns/dtos/columns.dto";

@Injectable()
export class ColumnDeleteGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.user.id;
        const input: DeleteColumnDto = request.body;

        if (input.userId === userId) {
            return true;
        } else {
            return false;
        }
    }
}