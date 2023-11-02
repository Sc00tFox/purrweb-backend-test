import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cards } from "../../cards/entities/cards.entity";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    body: string;

    @ManyToOne(() => Cards, (Cards) => Cards.comments)
    card: Cards
}