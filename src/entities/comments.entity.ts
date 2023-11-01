import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    body: string;

    @Column()
    card_id: number;
}