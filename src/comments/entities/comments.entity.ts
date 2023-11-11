import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cards } from "../../cards/entities/cards.entity";
import { Users } from "src/users/entites/users.entity";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    body: string;

    @Column()
    cardId: number;

    @Column()
    userId: number;

    @ManyToOne(() => Cards, (Cards) => Cards.comments)
    card: Cards

    @ManyToOne(() => Users, (Users) => Users.id)
    user: Users
}