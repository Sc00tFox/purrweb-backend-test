import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { DeleteCommentDto } from "src/comments/dtos/comments.dto";

@Injectable()
export class CommentDeleteGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.user.id;
        const input: DeleteCommentDto = request.body;

        if (input.userId === userId) {
            return true;
        } else {
            return false;
        }
    }
}