import { Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetColumnIdDto, GetColumnDto, CreateColumnsDto } from "../dtos/columns.dto";
import { ColumnsService } from "../services/columns.service";

@ApiTags('Columns')
@Controller('columns')
export class ColumnsController {
    constructor(
        private readonly columnsService: ColumnsService
    ) {}
    
    @ApiOperation({ summary: 'Create column' })
    @ApiBody({ type: CreateColumnsDto})
    @ApiResponse({ status: 200 })
    @Post(':title')
    async createColumn(@Param('title') title: string) {
        return this.columnsService.createColumn(title);
    }

    @ApiOperation({ summary: 'Get column by Id' })
    @ApiBody({ type: GetColumnIdDto })
    @ApiResponse({ status: 200, type: GetColumnDto })
    @Get(':id')
    async getColumnById(@Param('id') id: number): Promise<GetColumnDto> {
        return this.columnsService.getOneOrFail(id);
    }

    @ApiOperation({ summary: 'Delete columns by Id' })
    @ApiBody({ type: GetColumnIdDto })
    @ApiResponse({ status: 200 })
    @Delete(':id')
    async deleteUserColumns(@Param('id') id: number) {
        return this.columnsService.deleteColumnById(id);
    }
}