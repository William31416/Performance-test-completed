import { ProductCart } from "../models/productCart";
import { injectable } from "tsyringe";

@injectable()
export default class CartRepository {
    async addProductToCart(cartId: number, productId: number, quantity: number) {
        try {
            await ProductCart.create({ cartId, productId, quantity });
        } catch (error: any) {
            throw new Error(`Error adding product to cart: ${error.message}`);
        }
    }

    async removeProductFromCart(cartId: number, productId: number) {
        try {
            await ProductCart.destroy({
                where: { cartId, productId }
            });
        } catch (error: any) {
            throw new Error(`Error removing product from cart: ${error.message}`);
        }
    }

    async updateProductQuantityInCart(cartId: number, productId: number, quantity: number) {
        try {
            await ProductCart.update({ quantity }, {
                where: { cartId, productId }
            });
        } catch (error: any) {
            throw new Error(`Error updating product quantity in cart: ${error.message}`);
        }
    }
}