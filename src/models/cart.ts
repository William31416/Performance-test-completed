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

@Table({
    tableName: "Carts",
    timestamps: true,
})
export class Cart extends Model {
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
    userId!: number;  // Columna 'userId', almacena el ID del usuario asociado al carrito.
}