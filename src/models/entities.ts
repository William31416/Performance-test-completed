import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement
} from "sequelize-typescript";

@Table({
    tableName: "Entities",
    timestamps: true,
})
export class Entities extends Model {
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
    name!: string;  // Columna 'name', almacena el nombre de la entidad.
}