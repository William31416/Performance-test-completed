import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { Product } from "../models/product";
import { User } from "../models/user";
import { Role } from "../models/roles";
import { Cart } from "../models/cart";
import { ProductCart } from "../models/productCart";
import { Order } from "../models/order";
import { Entities } from "../models/entities";
import { Permissions } from "../models/permissions";

dotenv.config();

const sequelize: Sequelize = new Sequelize ({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [Product, User, Role, Cart, ProductCart, Order, Entities, Permissions]
})

export default sequelize;