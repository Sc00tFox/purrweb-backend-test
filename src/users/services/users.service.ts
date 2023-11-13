import { Injectable, NotFoundException } from "@nestjs/common";
import { UserDeleteDto, UserDto, UserUpdateDto } from "../dtos/users.dto";
import { Users } from "../entites/users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as crypto from "crypto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users) private readonly usersRepository: Repository<Users>
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

    async cryptoPassword(password: string) {
        return crypto.createHmac("sha512", password).digest("hex");
    }

    async create(user: UserDto): Promise<Users> {
        return this.usersRepository.save(this.usersRepository.create(user));
    }

    async updateUser(user: UserUpdateDto) {
        const findUser = await this.usersRepository.findOne({ where: { id: user.id }});
        if (!findUser) { 
            throw new NotFoundException('User not found'); 
        }

        findUser.email = user.email;
        findUser.password = await this.cryptoPassword(user.password);

        return this.usersRepository.save(findUser);
    }

    async deleteUser(user: UserDeleteDto) {
        const findUser = await this.usersRepository.findOne({ where: { id: user.id }});
        if (!findUser) { 
            throw new NotFoundException('User not found'); 
        }

        return this.usersRepository.delete({ id: user.id });
    }
}