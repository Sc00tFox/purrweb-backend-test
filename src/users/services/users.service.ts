import { Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { CreateUserDto } from "../dtos/users.dto";
import { Users } from "../entites/users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
    ) {}

    async getOneOrFail(@Param("id", ParseIntPipe) id: number): Promise<Users> {
        return this.usersRepository.findOneOrFail({ where: { id }});
    }

    async getByEmailAndPassword(email: string, password: string): Promise<Users> {
        return this.usersRepository.findOne({ where: { email, password }});
    }

    async isUserExist(email: string): Promise<Number> {
        return this.usersRepository.count({ where: { email: email }});
    }

    async create(users: CreateUserDto): Promise<Users> {
        return this.usersRepository.save(this.usersRepository.create(users));
    }
}