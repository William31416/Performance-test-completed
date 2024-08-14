import { container } from "tsyringe";
import { CartService } from "../services/productCart.Service";
import { Request, Response } from "express";

const cartService = container.resolve(CartService);

export default class CartController {

    static async addProductToCart(req: Request, res: Response) {
        try {
            const { cartId, productId, quantity } = req.body;
            await cartService.addProductToCart(cartId, productId, quantity);
            res.status(201).json({ message: 'Product added to cart successfully.' });
        } catch (error: any) {
            res.status(500).json({ message: `Error adding product to cart: ${error.message}` });
        }
    }

    static async removeProductFromCart(req: Request, res: Response) {
        try {
            const { cartId, productId } = req.body;
            await cartService.removeProductFromCart(cartId, productId);
            res.status(200).json({ message: 'Product removed from cart successfully.' });
        } catch (error: any) {
            res.status(500).json({ message: `Error removing product from cart: ${error.message}` });
        }
    }

    static async updateProductQuantityInCart(req: Request, res: Response) {
        try {
            const { cartId, productId, quantity } = req.body;
            await cartService.updateProductQuantityInCart(cartId, productId, quantity);
            res.status(200).json({ message: 'Product quantity updated successfully.' });
        } catch (error: any) {
            res.status(500).json({ message: `Error updating product quantity in cart: ${error.message}` });
        }
    }
}