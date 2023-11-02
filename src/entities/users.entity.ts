import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Columns } from "./columns.entity";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Columns, (Columns) => Columns.id)
    columns: Columns[]
}