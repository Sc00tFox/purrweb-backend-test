import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Columns } from "../entities/columns.entity";
import { Repository } from "typeorm";
import { CreateColumnsDto, DeleteColumnDto, UpdateColumnDto } from "../dtos/columns.dto";

@Injectable()
export class ColumnsService {
    constructor(
        @InjectRepository(Columns) private readonly columnsRepository: Repository<Columns>,
    ) {}

    async createColumn(column: CreateColumnsDto) {
        return this.columnsRepository.save(this.columnsRepository.create(column));
    }

    async getColumnById(id: number): Promise<Columns> {
        return this.columnsRepository.findOneOrFail({ where: { id }});
    }

    async updateColumn(column: UpdateColumnDto): Promise<Columns> {
        const findColumn = await this.columnsRepository.findOne({ where: { id: column.id }});

        if (!findColumn) {
            throw new NotFoundException("Column not Found!");
        }
        
        findColumn.title = column.title;
        return this.columnsRepository.save(findColumn);
    }

    async deleteColumnById(column: DeleteColumnDto) {
        return this.columnsRepository.delete({ id: column.id });
    }

    async isOwner(columnId: number, userId: number): Promise<boolean> {
        const column = this.columnsRepository.findOne({ where: { id: columnId }});
        if (!column) {
            return false;
        }
        return (await column).userId === userId;
    }
}