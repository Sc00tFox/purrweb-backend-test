import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { DeleteCardDto } from "src/cards/dtos/cards.dto";
import { ColumnsService } from "src/columns/services/columns.service";

@Injectable()
export class CardsDeleteGuard implements CanActivate {
    constructor(
        private readonly columnsService: ColumnsService
    ) {}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.user.id;
        const input: DeleteCardDto = request.body;

        return this.columnsService.isOwner(input.columnId, userId);
    }
}