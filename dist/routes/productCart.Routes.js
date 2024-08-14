"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productCart_Controller_1 = require("../controllers/productCart.Controller");
const routerCart = (0, express_1.Router)();
routerCart.post('/add', productCart_Controller_1.CartController.addProductToCart);
routerCart.post('/remove', productCart_Controller_1.CartController.removeProductFromCart);
routerCart.post('/update', productCart_Controller_1.CartController.updateProductQuantityInCart);
exports.default = routerCart;
