import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comments } from "../entities/comments.entity";
import { Repository } from "typeorm";
import { CreateCommentDto, UpdateCommentDto } from "../dtos/comments.dto";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comments) private readonly commentsRepository: Repository<Comments>
    ) {}

    async createComment(comment: CreateCommentDto) {
        return this.commentsRepository.save(this.commentsRepository.create(comment));
    }

    async getCommentById(id: number): Promise<Comments> {
        return this.commentsRepository.findOneOrFail({ where: { id }});
    }

    async updateCard(comment: UpdateCommentDto): Promise<Comments> {
        const findComment = await this.commentsRepository.findOne({ where: { id: comment.id }});

        if (!findComment) {
            throw new NotFoundException("Comment not Found!");
        }
        
        findComment.body = comment.body;
        return this.commentsRepository.save(findComment);
    }

    async deleteCommentById(id: number) {
        return this.commentsRepository.delete({ id: id });
    }
}