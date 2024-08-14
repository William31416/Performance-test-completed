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
import { Entities } from "./entities";

@Table({
    tableName: "Permissions",
    timestamps: true,
})
export class Permissions extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;  // Columna 'id', clave primaria de la tabla.

    @ForeignKey(() => Role)  // Define 'roleId' como una clave foránea que referencia a la tabla "Roles".
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roleId!: number;  // Columna 'roleId', almacena el ID del rol asociado a este permiso.

    @ForeignKey(() => Entities)  // Define 'entityId' como una clave foránea que referencia a la tabla "Entities".
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    entityId!: number;  // Columna 'entityId', almacena el ID de la entidad asociada a este permiso.

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    canCreate!: boolean;  // Columna 'canCreate', indica si el rol tiene permiso para crear.

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    canUpdate!: boolean;  // Columna 'canUpdate', indica si el rol tiene permiso para actualizar.

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    canDelete!: boolean;  // Columna 'canDelete', indica si el rol tiene permiso para eliminar.

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    canGet!: boolean;  // Columna 'canGet', indica si el rol tiene permiso para obtener.
}
