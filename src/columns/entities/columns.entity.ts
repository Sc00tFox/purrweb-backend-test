import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "../../users/entites/users.entity";
import { Cards } from "../../cards/entities/cards.entity";

@Entity()
export class Columns {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    title: string;

    @ManyToOne(() => Users, (Users) => Users.columns)
    user: Users

    @OneToMany(() => Cards, (Cards) => Cards.id)
    cards: Cards[]
}