import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { Columns } from "../../columns/entities/columns.entity";
import * as crypto from 'crypto'

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    hashPasswordBeforeInsert() {
        this.password = crypto.createHmac('sha512', this.password).digest('hex');
    }

    @OneToMany(() => Columns, (Columns) => Columns.id)
    columns: Columns[]
}