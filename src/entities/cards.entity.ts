import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Columns } from "./columns.entity";
import { Comments } from "./comments.entity";

@Entity()
export class Cards {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @ManyToOne(() => Columns, (Columns) => Columns.cards)
    column: Columns

    @OneToMany(() => Comments, (Comments) => Comments.id)
    comments: Comments[]
}