import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CommentsService } from "../services/comments.service";
import { CreateCommentDto, GetCommentDto, GetCommentIdDto } from "../dtos/comments.dto";
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
        return this.commentsService.createComment(input);
    }

    @ApiOperation({ summary: 'Get comment by Id' })
    @ApiBody({ type: GetCommentIdDto })
    @ApiResponse({ status: 200, type: GetCommentDto })
    @Get(':id')
    async getColumnById(@Param('id') id: number): Promise<GetCommentDto> {
        return this.commentsService.getCommentById(id);
    }

    @ApiOperation({ summary: 'Delete comment by Id' })
    @ApiBody({ type: GetCommentIdDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteUserColumnById(@Param('id') id: number) {
        return this.commentsService.deleteCommentById(id);
    }
}