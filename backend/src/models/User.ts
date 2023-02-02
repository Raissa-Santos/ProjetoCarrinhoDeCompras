import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("user")
export default class User {
    @PrimaryGeneratedColumn('increment')//autoincrement
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}