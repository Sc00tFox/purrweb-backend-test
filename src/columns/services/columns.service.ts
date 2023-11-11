import { Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Columns } from "../entities/columns.entity";
import { Repository } from "typeorm";
import { CreateColumnsDto } from "../dtos/columns.dto";

@Injectable()
export class ColumnsService {
    constructor(
        @InjectRepository(Columns) private readonly columnsRepository: Repository<Columns>,
    ) {}

    async createColumn(column: CreateColumnsDto) {
        return this.columnsRepository.save(this.columnsRepository.create(column));
    }

    async getColumnById(@Param("id", ParseIntPipe) id: number): Promise<Columns> {
        return this.columnsRepository.findOneOrFail({ where: { id }});
    }

    async deleteColumnById(@Param("id", ParseIntPipe) id: number) {
        return this.columnsRepository.delete({ id: id });
    }
}