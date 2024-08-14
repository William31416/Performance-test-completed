import { container } from "tsyringe";
import OrderRepository from "../repositories/order.Repository";
import { OrderService } from "../services/order.Service";

import ProductRepository from "../repositories/product.Repository";
import { ProductService } from "../services/product.Service";

import CartRepository from "../repositories/productCart.Repository";
import { CartService } from "../services/productCart.Service";

import UserRepository from "../repositories/user.Repository";
import { UserService } from "../services/user.Service";

container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);

container.registerSingleton<CartRepository>(CartRepository);
container.registerSingleton<CartService>(CartService);

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);