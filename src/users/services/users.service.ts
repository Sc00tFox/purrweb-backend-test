import { Injectable, NotFoundException } from "@nestjs/common";
import { UserDto } from "../dtos/users.dto";
import { Users } from "../entites/users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
    ) {}

    async getOneOrFail(id: number): Promise<Users> {
        return this.usersRepository.findOneOrFail({ where: { id }});
    }

    async getUserById(id: number): Promise<Users> {
        const user = await this.usersRepository.findOne({ where: { id }});
        if (!user) { 
            throw new NotFoundException('User not found'); 
        }
        return user;
    }

    async getByEmailAndPassword(email: string, password: string): Promise<Users> {
        return this.usersRepository.findOne({ where: { email, password }});
    }

    async isUserExist(email: string): Promise<boolean> {
        const userCount = await this.usersRepository.findOne({ where: { email: email }});
        return !!userCount;
    }

    async create(users: UserDto): Promise<Users> {
        return this.usersRepository.save(this.usersRepository.create(users));
    }
}