import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comments } from "./entities/comments.entity";
import { CommentsService } from "./services/comments.service";
import { CommentsController } from "./controllers/comments.controller";

@Module({
    controllers: [CommentsController],
    providers: [CommentsService],
    imports: [
        TypeOrmModule.forFeature([Comments])
    ],
    exports: [CommentsService]
})
export class CommentsModule {}