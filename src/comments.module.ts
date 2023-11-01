import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comments } from "./entities/comments.entity";

@Module({
    controllers: [],
    providers: [],
    imports: [
        TypeOrmModule.forFeature([Comments])
    ]
})
export class CommentsModule {}