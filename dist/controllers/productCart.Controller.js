"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const tsyringe_1 = require("tsyringe");
const productCart_Service_1 = require("../services/productCart.Service");
const cartService = tsyringe_1.container.resolve(productCart_Service_1.CartService);
class CartController {
    static addProductToCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cartId, productId, quantity } = req.body;
                yield cartService.addProductToCart(cartId, productId, quantity);
                res.status(201).json({ message: 'Product added to cart successfully.' });
            }
            catch (error) {
                res.status(500).json({ message: `Error adding product to cart: ${error.message}` });
            }
        });
    }
    static removeProductFromCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cartId, productId } = req.body;
                yield cartService.removeProductFromCart(cartId, productId);
                res.status(200).json({ message: 'Product removed from cart successfully.' });
            }
            catch (error) {
                res.status(500).json({ message: `Error removing product from cart: ${error.message}` });
            }
        });
    }
    static updateProductQuantityInCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { cartId, productId, quantity } = req.body;
                yield cartService.updateProductQuantityInCart(cartId, productId, quantity);
                res.status(200).json({ message: 'Product quantity updated successfully.' });
            }
            catch (error) {
                res.status(500).json({ message: `Error updating product quantity in cart: ${error.message}` });
            }
        });
    }
}
exports.CartController = CartController;
