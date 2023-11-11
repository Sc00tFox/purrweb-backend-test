import { Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comments } from "../entities/comments.entity";
import { Repository } from "typeorm";
import { CreateCommentDto } from "../dtos/comments.dto";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comments) private readonly commentsRepository: Repository<Comments>
    ) {}

    async createComment(comment: CreateCommentDto) {
        return this.commentsRepository.save(this.commentsRepository.create(comment));
    }

    async getCommentById(@Param("id", ParseIntPipe) id: number): Promise<Comments> {
        return this.commentsRepository.findOneOrFail({ where: { id }});
    }

    async deleteCommentById(@Param("id", ParseIntPipe) id: number) {
        return this.commentsRepository.delete({ id: id });
    }
}