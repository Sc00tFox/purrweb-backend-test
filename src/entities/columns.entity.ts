import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    title: string;
}