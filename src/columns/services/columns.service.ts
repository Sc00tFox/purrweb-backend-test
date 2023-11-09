import { Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Columns } from "../entities/columns.entity";
import { Repository } from "typeorm";

@Injectable()
export class ColumnsService {
    constructor(
        @InjectRepository(Columns) private readonly columnsRepository: Repository<Columns>,
    ) {}

    async createColumn(@Param("title") title: string) {
        return this.columnsRepository.create({ title: title });
    }
    
    async getOneOrFail(@Param("id", ParseIntPipe) id: number): Promise<Columns> {
        return this.columnsRepository.findOneOrFail({ where: { id }});
    }

    async deleteColumnById(@Param("id", ParseIntPipe) id: number) {
        return this.columnsRepository.delete({ id: id });
    }
}