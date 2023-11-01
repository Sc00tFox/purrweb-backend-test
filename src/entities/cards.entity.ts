import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;
}