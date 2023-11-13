import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UpdateCommentDto } from "src/comments/dtos/comments.dto";

@Injectable()
export class CommentUpdateGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const userId = request.user.id;
        const input: UpdateCommentDto = request.body;

        if (input.userId === userId) {
            return true;
        } else {
            return false;
        }
    }
}