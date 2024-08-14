import CartRepository from "../repositories/productCart.Repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CartService {
    constructor(
        @inject(CartRepository) private cartRepository: CartRepository
    ) {}

    async addProductToCart(cartId: number, productId: number, quantity: number) {
        try {
            await this.cartRepository.addProductToCart(cartId, productId, quantity);
            return { message: 'Product added to cart successfully.' };
        } catch (error: any) {
            throw new Error(`Error adding product to cart: ${error.message}`);
        }
    }

    async removeProductFromCart(cartId: number, productId: number) {
        try {
            await this.cartRepository.removeProductFromCart(cartId, productId);
            return { message: 'Product removed from cart successfully.' };
        } catch (error: any) {
            throw new Error(`Error removing product from cart: ${error.message}`);
        }
    }

    async updateProductQuantityInCart(cartId: number, productId: number, quantity: number) {
        try {
            await this.cartRepository.updateProductQuantityInCart(cartId, productId, quantity);
            return { message: 'Product quantity updated successfully.' };
        } catch (error: any) {
            throw new Error(`Error updating product quantity in cart: ${error.message}`);
        }
    }
}