import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("shoppingcart")
export default class ShoppingCart {
    @PrimaryGeneratedColumn('increment')//autoincrement
    id: number;

    @Column()
    description: string;

    @Column()
    unitprice: number;

    @Column()
    quantity: number;

    @Column()
    totalprice: number;

    @Column()
    image: string;
}