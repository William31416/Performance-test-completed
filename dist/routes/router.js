"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_Routes_1 = __importDefault(require("./order.Routes"));
const product_Routes_1 = __importDefault(require("./product.Routes"));
const productCart_Routes_1 = __importDefault(require("./productCart.Routes"));
const user_Routes_1 = __importDefault(require("./user.Routes"));
const router = (0, express_1.Router)();
router.use('/orders', order_Routes_1.default);
router.use('/products', product_Routes_1.default);
router.use('/cart', productCart_Routes_1.default);
router.use('/users', user_Routes_1.default);
exports.default = router;
