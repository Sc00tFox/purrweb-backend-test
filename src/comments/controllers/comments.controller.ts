import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CommentsService } from "../services/comments.service";
import { CreateCommentDto, GetCommentDto, GetCommentIdDto, UpdateCommentDto } from "../dtos/comments.dto";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService
    ) {}

    @ApiOperation({ summary: 'Create comment' })
    @ApiBody({ type: CreateCommentDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createColumn(@Body() input: CreateCommentDto) {
        return this.commentsService.createComment({ body: input.body, cardId: input.cardId, userId: input.userId });
    }

    @ApiOperation({ summary: 'Get comment by Id' })
    @ApiBody({ type: GetCommentIdDto })
    @ApiResponse({ status: 200, type: GetCommentDto })
    @Get(':id')
    async getColumnById(@Param("id", ParseIntPipe) id: number): Promise<GetCommentDto> {
        return this.commentsService.getCommentById(id);
    }

    @ApiOperation({ summary: 'Update comment name' })
    @ApiBody({ type: UpdateCommentDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put()
    async updateColumn(@Body() input: UpdateCommentDto) {
        return this.commentsService.updateCard({ id: input.id, body: input.body });
    }

    @ApiOperation({ summary: 'Delete comment by Id' })
    @ApiBody({ type: GetCommentIdDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteUserColumnById(@Param("id", ParseIntPipe) id: number) {
        return this.commentsService.deleteCommentById(id);
    }
}