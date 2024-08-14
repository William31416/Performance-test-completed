import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey
} from "sequelize-typescript";
import { Cart } from "./cart";
import { Product } from "./product";

@Table({
    tableName: "ProductCarts",
    timestamps: true,
})
export class ProductCart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;  // Columna 'id', clave primaria de la tabla.

    @ForeignKey(() => Cart)  // Define 'cartId' como una clave foránea que referencia a la tabla "Carts".
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cartId!: number;  // Columna 'cartId', almacena el ID del carrito asociado.

    @ForeignKey(() => Product)  // Define 'productId' como una clave foránea que referencia a la tabla "Products".
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productId!: number;  // Columna 'productId', almacena el ID del producto asociado.

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    quantity!: number;  // Columna 'quantity', almacena la cantidad de este producto en el carrito.
}