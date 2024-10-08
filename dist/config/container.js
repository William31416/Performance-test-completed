"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const order_Repository_1 = require("../repositories/order.Repository");
const order_Service_1 = require("../services/order.Service");
const product_Repository_1 = require("../repositories/product.Repository");
const product_Service_1 = require("../services/product.Service");
const productCart_Repository_1 = require("../repositories/productCart.Repository");
const productCart_Service_1 = require("../services/productCart.Service");
const user_Repository_1 = require("../repositories/user.Repository");
const user_Service_1 = require("../services/user.Service");
tsyringe_1.container.registerSingleton(order_Repository_1.OrderRepository);
tsyringe_1.container.registerSingleton(order_Service_1.OrderService);
tsyringe_1.container.registerSingleton(product_Repository_1.ProductRepository);
tsyringe_1.container.registerSingleton(product_Service_1.ProductService);
tsyringe_1.container.registerSingleton(productCart_Repository_1.CartRepository);
tsyringe_1.container.registerSingleton(productCart_Service_1.CartService);
tsyringe_1.container.registerSingleton(user_Repository_1.UserRepository);
tsyringe_1.container.registerSingleton(user_Service_1.UserService);
