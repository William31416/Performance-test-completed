import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey
} from "sequelize-typescript";
import { User } from "./user";
import { ProductCart } from "./productCart";

@Table({
    tableName: "Orders",
    timestamps: true,
})
export class Order extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;  // Columna 'id', clave primaria de la tabla.

    @ForeignKey(() => User)  // Define 'userId' como una clave foránea que referencia a la tabla "Users".
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: number;  // Columna 'userId', almacena el ID del usuario que realizó la orden.

    @ForeignKey(() => ProductCart)  // Define 'productCartId' como una clave foránea que referencia a la tabla "ProductCarts".
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    productCartId!: number;  // Columna 'productCartId', almacena el ID del carrito de productos asociado.

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    total!: number;  // Columna 'total', almacena el costo total de la orden.
}
