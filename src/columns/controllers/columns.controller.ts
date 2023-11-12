import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetColumnIdDto, GetColumnDto, CreateColumnsDto, UpdateColumnDto } from "../dtos/columns.dto";
import { ColumnsService } from "../services/columns.service";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('Columns')
@Controller('columns')
export class ColumnsController {
    constructor(
        private readonly columnsService: ColumnsService
    ) {}
    
    @ApiOperation({ summary: 'Create column' })
    @ApiBody({ type: CreateColumnsDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createColumn(@Body() input: CreateColumnsDto) {
        return this.columnsService.createColumn({ title: input.title, userId: input.userId });
    }

    @ApiOperation({ summary: 'Get column by Id' })
    @ApiBody({ type: GetColumnIdDto })
    @ApiResponse({ status: 200, type: GetColumnDto })
    @Get(':id')
    async getColumnById(@Param("id", ParseIntPipe) id: number): Promise<GetColumnDto> {
        return this.columnsService.getColumnById(id);
    }

    @ApiOperation({ summary: 'Update column title' })
    @ApiBody({ type: UpdateColumnDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Put()
    async updateColumn(@Body() input: UpdateColumnDto) {
        return this.columnsService.updateColumn({ id: input.id, title: input.title });
    }

    @ApiOperation({ summary: 'Delete column by Id' })
    @ApiBody({ type: GetColumnIdDto })
    @ApiResponse({ status: 200 })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteUserColumnById(@Param("id", ParseIntPipe) id: number) {
        return this.columnsService.deleteColumnById(id);
    }
}