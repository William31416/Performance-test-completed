import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey     
} from "sequelize-typescript";
import { Role } from "./roles";

@Table({
    tableName: "Users",
    timestamps: true,
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;  // Columna 'id', clave primaria de la tabla.

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    email!: string;  // Columna 'email', almacena el correo electrónico del usuario.

    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    password!: string;  // Columna 'password', almacena la contraseña del usuario.

    @ForeignKey(() => Role)  // Define 'roleId' como una clave foránea que referencia a la tabla "Roles".
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleId!: number;  // Columna 'roleId', almacena el ID del rol asociado al usuario.
}
