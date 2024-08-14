"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
const product_1 = require("../models/product");
const user_1 = require("../models/user");
const roles_1 = require("../models/roles");
const cart_1 = require("../models/cart");
const productCart_1 = require("../models/productCart");
const order_1 = require("../models/order");
const entities_1 = require("../models/entities");
const permissions_1 = require("../models/permissions");
dotenv_1.default.config();
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [product_1.Product, user_1.User, roles_1.Role, cart_1.Cart, productCart_1.ProductCart, order_1.Order, entities_1.Entities, permissions_1.Permissions]
});
exports.default = sequelize;
